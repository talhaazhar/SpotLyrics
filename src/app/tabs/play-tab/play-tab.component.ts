import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PlayerService } from '../../../services/player.service';
import { ITrack } from '../../../common/Interfaces';

@Component({
    selector: 'app-play-tab',
    templateUrl: './play-tab.component.html',
    styleUrls: ['./play-tab.component.scss'],
})
export class PlayTabComponent implements OnInit {
    currentTrack: ITrack = null;
    trackLyrics = null;
    trackSubscription$: Observable<ITrack>;

    constructor(private playerService: PlayerService) {
        this.trackSubscription$ = playerService.trackObserver$;
    }

    ngOnInit() {
        this.trackSubscription$.subscribe(data => {
            this.currentTrack = data;
        });
    }
}
