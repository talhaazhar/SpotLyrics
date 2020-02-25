import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenreSongListPage } from './genre-song-list.page';

const routes: Routes = [
  {
    path: '',
    component: GenreSongListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenreSongListPageRoutingModule {}
