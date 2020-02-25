import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { GenreService } from '../../services/genre.service';
import { PlayerService } from '../../services/player.service';
import { RoutestackService } from '../../services/routestack.service';

import { IGetSongNameBody, ITrack } from '../../common/Interfaces';
import { Genre } from 'src/providers/Genre';

@Component({
    selector: 'app-genre-song-list',
    templateUrl: './genre-song-list.page.html',
    styleUrls: ['./genre-song-list.page.scss'],
})
export class GenreSongListPage implements OnInit {
    id: number;
    private sub: any;
    listToShow: ITrack[] = [];
    genreDetails: Genre;

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private routestackService: RoutestackService,
        private genreService: GenreService,
        private playerService: PlayerService,
    ) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        this.genreDetails = this.genreService.getGenreDetails(this.id);
        this.fetchSongList();
    }

    onClose() {
        return this.routestackService.getPreviousUrl();
    }

    click_item(track: ITrack) {
        console.log(track);
        this.playerService.updateTrack(track);
    }

    fetchSongList(): void {
        
        const currentGenreId = this.id

        this.apiService.fetchGenre(currentGenreId).subscribe((data: IGetSongNameBody) => {
            const trackList = data.track_list.map(element => {
                return element.track;
            });
            this.listToShow = trackList;
            console.log(this.listToShow);
        });
    }
}
