import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { PlayerService } from '../../services/player.service';
import { RoutestackService } from '../../services/routestack.service';

import { IGetLyricsBody } from '../../common/Interfaces';

@Component({
    selector: 'app-lyrics',
    templateUrl: './lyrics.page.html',
    styleUrls: ['./lyrics.page.scss'],
})
export class LyricsPage implements OnInit {
    lyrics: string = 'No Lyrics Available';
    songName: string;
    artistName: string;

    constructor(
        private apiService: ApiService,
        private playerService: PlayerService,
        private routestackService: RoutestackService,
    ) {}

    ngOnInit() {
        
    }

    ionViewWillEnter() {
        this.lyrics = this.fetchLyrics();
    }

    onClose() {
        return this.routestackService.getPreviousUrl();
    }

    fetchLyrics(): string {
        const currentTrackId = this.playerService.getCurrentTrackId();
        this.songName = this.playerService.getCurrentTrackName();
        this.artistName = this.playerService.getCurrentTrackArtist();

        this.apiService.fetchLyrics(currentTrackId).subscribe((data: IGetLyricsBody) => {
            this.lyrics = data.lyrics.lyrics_body;
        });

        return this.lyrics;
    }
}
