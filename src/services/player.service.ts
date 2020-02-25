import { Injectable, EventEmitter, Output } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import _ from 'lodash';

import { ITrack } from '../common/Interfaces';

@Injectable({
    providedIn: 'root',
})
export class PlayerService {
    private currentTrack: ITrack = null;

    private currentTrackObserver: Subject<ITrack> = new Subject<ITrack>();
    trackObserver$: Observable<ITrack> = null;
    private playerOpen: boolean = false;
    @Output() playerOpenObserver$: EventEmitter<boolean> = new EventEmitter();

    constructor() {
        this.trackObserver$ = this.currentTrackObserver.asObservable();
    }

    private emitTrack() {
        this.currentTrackObserver.next(this.currentTrack);
    }

    fetchSongLyrics() {}

    public updateTrack(track: ITrack): void {
        this.currentTrack = track;
        this.emitTrack();
    }

    public toggleLyricsClose() {
        this.playerOpenObserver$.emit(false);
    }

    public getCurrentTrackId() {
        return _.get(this.currentTrack, 'track_id', 0);
    }

    public getCurrentTrackName() {
        return _.get(this.currentTrack, 'track_name', "Unknown");
    }

    public getCurrentTrackArtist() {
        return _.get(this.currentTrack, 'artist_name', "Unknown");
    }
    
}
