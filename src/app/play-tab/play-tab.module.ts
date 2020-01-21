import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayTabPageRoutingModule } from './play-tab-routing.module';

import { PlayTabPage } from './play-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayTabPageRoutingModule
  ],
  declarations: [PlayTabPage]
})
export class PlayTabPageModule {}
