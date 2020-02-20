import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { ITrack } from '../common/Interfaces';

@Injectable({
    providedIn: 'root',
})
export class PlayerService {
    private currentTrackObserver: Subject<ITrack> = new Subject<ITrack>();
    private currentTrack: ITrack = null;
    trackObserver$: Observable<ITrack> = null;

    constructor() {
        this.trackObserver$ = null;
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

    public getLyricsId() {
        return this.currentTrack.track_id;
    }
}
