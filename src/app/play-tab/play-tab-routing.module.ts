import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayTabPage } from './play-tab.page';

const routes: Routes = [
  {
    path: '',
    component: PlayTabPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayTabPageRoutingModule {}
