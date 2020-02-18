import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { buildQuery } from '../common/utils';
import { IGetSongName, dat } from '../common/Interfaces'

// @ts-ignore
const oauthSignature = require('oauth-signature');
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

    public getSongByName(trackName: string): Observable<Object> {
        const data: IGetSongName = {
            apikey: API_KEY,
            format: 'json',
            callback: 'callback',
            q_track: trackName,
            quorum_factor: 1,
        }
        const query = buildQuery(data);

        return this.httpClient
            .get(API_URL + 'track.searchw?' + query, { headers: this.headers })
            .pipe(
                map((data: dat) => {
                    console.log(data.message.header);
                    return data;
                }),
                catchError(error => {
                    return this.throwError('Song not found!');
                })
            );
    }

    private throwError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
