import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { buildQuery, cachedFetch } from '../common/utils';
import { IGetSongName, IResponse, IGetSongNameBody, ICacheObject } from '../common/Interfaces';

const CORS_HOST: string = 'https://cors-anywhere.herokuapp.com/'; // a little hack, not good for prod.
const API_URL: string = CORS_HOST + 'https://api.musixmatch.com/ws/1.1/';
const API_KEY: string = environment.apiKey;

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    headers = null;
    constructor(private httpClient: HttpClient) {
        var headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        this.headers = headers;
    }

    public getSongByName(trackName: string): Observable<IGetSongNameBody | Observable<never>> {
        const data: IGetSongName = {
            apikey: API_KEY,
            format: 'json',
            callback: 'callback',
            q_track: trackName,
            quorum_factor: 1,
        };

        const query = buildQuery(data);
        const fetchURL: string = API_URL + 'track.search?' + query;

        const cache = cachedFetch(fetchURL, 150);
        if (cache) {
            const cacheData: IResponse<IGetSongNameBody> = JSON.parse(cache);
            if (cacheData != null) {
                return of(cacheData.message.body);
            }
        }
        console.log("HEREE");
        
        return this.httpClient.get(fetchURL, { headers: this.headers }).pipe(
            map((data: IResponse<IGetSongNameBody>) => {
                if (data.message.header.status_code !== 200) {
                    return this.throwError(data.message.header, 'Song not found!');
                }

                const cacheObject: ICacheObject = {
                    data: JSON.stringify(data),
                    fetchTime: Date.now()
                }

                localStorage.setItem(fetchURL, JSON.stringify(cacheObject));
                return data.message.body;
            }),
            catchError(error => {
                return this.throwError(error, 'Song not found!');
            })
        );
    }

    private throwError(error: Response | any, customErrorString: string) {
        console.error('ERRROR', customErrorString);
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
