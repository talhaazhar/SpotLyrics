import { Component } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Genre } from '../../providers/Genre';
import { ColorList, getLinearBackground } from '../../assets/constants';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  
  getLinearBackground: Function = getLinearBackground;
  constructor(private genreService: GenreService) {}
  genreList: Genre[];
  colorList: any[] = ColorList;
  

  ngOnInit() { 
    this.getGenres();
  }

  getGenres(): void {
    this.genreService.getGenreList()
        .subscribe(genres => this.genreList = genres);
  }
}
