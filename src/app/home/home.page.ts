import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor(private apiService: ApiService) {}

    alert() {
        this.apiService.getSongByName("love").subscribe((data: Object[]) => {
            console.log(data);
        });
    }
}
