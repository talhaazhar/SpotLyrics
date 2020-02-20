import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { RoutestackService } from '../../services/routestack.service';

@Component({
    selector: 'app-lyrics',
    templateUrl: './lyrics.page.html',
    styleUrls: ['./lyrics.page.scss'],
})
export class LyricsPage implements OnInit {
    
    constructor(
        private playerService: PlayerService,
        private routestackService: RoutestackService
    ) {}

    ngOnInit() {
    }

    onClose() {
        return this.routestackService.getPreviousUrl();
    }
}
