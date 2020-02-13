import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { GenreTabComponent } from './genre-tab/genre-tab.component';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: SearchPage }])
	],
	declarations: [
		SearchPage,
		GenreTabComponent
	]
})
export class SearchPageModule {}
