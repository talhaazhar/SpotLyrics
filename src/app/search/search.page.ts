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
    list_to_show: ITrack[] = [];
    show_list: boolean = false;

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
        this.show_list = false;
    }

    click_bar(): void {
        this.show_list = true;
    }

    click_item(track: ITrack) {
        console.log(track);
        this.show_list = false;
        this.playerService.updateTrack(track);
    }

    change_query(query) {
        this.apiService.searchTrack(query.toUpperCase()).subscribe((data: IGetSongNameBody) => {
            const trackList = data.track_list.map(element => {
                return element.track;
            });
            this.list_to_show = trackList;
        });
    }
}
