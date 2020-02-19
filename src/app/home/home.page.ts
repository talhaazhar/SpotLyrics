import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IGetSongNameBody } from '../../common/Interfaces';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    list_original = [];
    list_to_show;
    selected_index = -1;
    show_list = true;
    
    constructor(private apiService: ApiService) {}

    alert() {
        this.apiService.searchTrack('love').subscribe((data: Object) => {
            console.log(data);
        });
    }
}
