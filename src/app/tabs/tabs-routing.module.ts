import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home-tab',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../home/home.module').then(m => m.HomePageModule),
                    },
                ],
            },
            {
                path: 'search-tab',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../search/search.module').then(m => m.SearchPageModule),
                    },
                ],
            },
            {
                path: 'library-tab',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../library/library.module').then(m => m.LibraryPageModule),
                    },
                ],
            },
            {
                path: 'lyrics-tab',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../lyrics/lyrics.module').then(m => m.LyricsPageModule),
                    },
                ],
            },
            {
                path: '',
                redirectTo: '/tabs/home-tab',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/home-tab',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {}
