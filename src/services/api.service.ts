import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";


const API_URL = 'https://api.musixmatch.com/ws/1.1/';

@Injectable({
	providedIn: 'root'
})

export class ApiService {

	constructor(private http: Http) { }

	public getAllTodos(): Observable<Object> {
		return this.http.get(API_URL + '/todos')
			.pipe(
			map(response => {
			const todos = response.json();
			return todos.map((todo) => new Todo(todo))
			
			}), catchError(this.handleError)
		);
	}

	private handleError (error: Response | any) {
		console.error('ApiService::handleError', error);
		return Observable.throw(error);
	}
}
