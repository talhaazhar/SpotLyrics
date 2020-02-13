import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { buildQuery } from '../assets/utils';

const API_URL: string = 'https://api.musixmatch.com/ws/1.1/';
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
        headers.append('Access-Control-Allow-Origin', '*');

        this.headers = headers;
    }

    public getAllTodos(): Observable<Object> {
        const query = buildQuery({
            apikey: API_KEY,
            format: 'json',
            callback: 'callback',
            q_track: 'blues',
            quorum_factor: 1,
        });

        return this.httpClient.get('http://crossorigin.me/' + API_URL + 'track.search?' + query, { headers: this.headers }).pipe(
            map((data: Object[]) => {
                console.log(data);
                return data;
            }),
            catchError(error => {
                return this.throwError('Capital not found!');
            })
        );
    }

    private throwError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
