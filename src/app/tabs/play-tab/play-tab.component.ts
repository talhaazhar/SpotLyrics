import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';

import { PlayerService } from '../../../services/player.service';
import { ITrack } from '../../../common/Interfaces';

@Component({
    selector: 'app-play-tab',
    templateUrl: './play-tab.component.html',
    styleUrls: ['./play-tab.component.scss'],
})
export class PlayTabComponent implements OnInit, OnDestroy {
    currentTrack: ITrack = null;
    animationStatus: boolean = false;
    trackLyrics = null;

    trackSubscription$: Observable<ITrack>;
    playerOpenSubscription$: EventEmitter<boolean>;

    subscriptionList: any[] = [];

    constructor(private playerService: PlayerService) {
        this.trackSubscription$ = playerService.trackObserver$;
        this.playerOpenSubscription$ = playerService.playerOpenObserver$;
    }

    ngOnInit() {
        const trackSubscription = this.trackSubscription$.subscribe(data => {
            this.currentTrack = data;
        });
        const playButtonSubscription = this.playerOpenSubscription$.subscribe(isOpen => {
            this.animationStatus = isOpen;
        });

       this.subscriptionList.push(trackSubscription);
       this.subscriptionList.push(playButtonSubscription);
    }

    ngOnDestroy(){
        this.subscriptionList.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }

    clickPlayEvent() {
        this.animationStatus = true;
    }

}
