import { Component } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Genre } from '../../providers/Genre';
import { ColorList } from '../../assets/constants';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  

  constructor(private genreService: GenreService) {}
  genreList: Genre[];
  colorList: string[] = ColorList;
  

  ngOnInit() { 
    this.getGenres();
  }

  getGenres(): void {
    this.genreService.getGenreList()
        .subscribe(genres => this.genreList = genres);
  }
}
