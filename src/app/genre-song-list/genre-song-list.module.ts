import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenreSongListPage } from './genre-song-list.page';
import { GenreSongListPageRoutingModule } from './genre-song-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenreSongListPageRoutingModule,
  ],
  declarations: [GenreSongListPage]
})
export class GenreSongListPageModule {}
