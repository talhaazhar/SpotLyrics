import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as data from '../assets/genre-list.json';
import { Genre } from '../providers/Genre';
import _ from 'lodash';


@Injectable({
	providedIn: 'root'
})
export class GenreService {
    genreCollection: Genre[] = [];
    genreDict: any;

	constructor() {
		const dummyDataRequest: any = (data as any).default;
		const genreData = _.get(dummyDataRequest, 'data', []);

		var i;
		for (i = 0; i < genreData.length; i++) {
			const genreObject = new Genre(genreData[i].name, genreData[i].icon, genreData[i].music_genre_id);
			this.genreCollection.push(genreObject)
        };
        this.createGenreDict();
    }
    
    createGenreDict() {
        const genreDict = this.genreCollection.reduce(function(map, obj) {
            map[obj.genreId] = obj;
            return map;
        }, {});

        this.genreDict = genreDict;
    }

	getTopGenre() {

    }
    
    getGenreDetails(id: number) {
        return this.genreDict[id];
    }

	getGenreList(): Observable<Genre[]> {
		return of(this.genreCollection);
	}

}
