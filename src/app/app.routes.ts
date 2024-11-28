import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        loadComponent:() => import('./rickandmorty/pages/rym-home/rym-home.component').then(m => m.RYMHomeComponent)
    },
    {
        path:"**",
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadComponent:() => import('./rickandmorty/pages/rym-home/rym-home.component').then(m => m.RYMHomeComponent)
    }
];
