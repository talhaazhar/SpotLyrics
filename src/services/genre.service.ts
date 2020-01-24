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

  constructor() {
    const dummyDataRequest: any = (data as any).default;
    const genreData = _.get(dummyDataRequest, 'data', []);

    var i;
    for (i = 0; i < genreData.length; i++) {
      const genreObject = new Genre(genreData[i].name, genreData[i].icon);
      this.genreCollection.push(genreObject)
    };
  }

  getTopGenre() {

  }

  getGenreList(): Observable<Genre[]> {
    return of(this.genreCollection);
  }

}
