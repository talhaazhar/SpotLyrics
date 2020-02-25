import { Component } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { ApiService } from '../../services/api.service';
import { PlayerService } from '../../services/player.service';

import { Genre } from '../../providers/Genre';

import { ColorList } from '../../common/constants';
import { getLinearBackground } from '../../common/utils';
import { IGetSongNameBody, ITrack } from '../../common/Interfaces';

@Component({
    selector: 'app-search',
    templateUrl: 'search.page.html',
    styleUrls: ['search.page.scss'],
})
export class SearchPage {
    getLinearBackground: Function = getLinearBackground;
    genreList: Genre[];
    colorList: any[] = ColorList;
    listToShow: ITrack[] = [];
    showList: boolean = false;

    constructor(
        private genreService: GenreService,
        private apiService: ApiService,
        private playerService: PlayerService
    ) {}

    ngOnInit() {
        this.getGenres();
    }

    getGenres(): void {
        this.genreService.getGenreList().subscribe(genres => (this.genreList = genres));
    }

    onCancel(): void {
        this.showList = false;
    }

    click_bar(): void {
        this.showList = true;
    }

    click_item(track: ITrack) {
        console.log(track);
        this.showList = false;
        this.playerService.updateTrack(track);
    }

    change_query(query) {
        this.apiService.searchTrack(query.toUpperCase()).subscribe((data: IGetSongNameBody) => {
            const trackList = data.track_list.map(element => {
                return element.track;
            });
            this.listToShow = trackList;
        });
    }
}
