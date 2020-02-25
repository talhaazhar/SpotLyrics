import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
	},
  {
    path: 'lyrics',
    loadChildren: () => import('./lyrics/lyrics.module').then( m => m.LyricsPageModule)
  },
  {
    path: 'genre-song-list',
    loadChildren: () => import('./genre-song-list/genre-song-list.module').then( m => m.GenreSongListPageModule)
  },
];
@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
