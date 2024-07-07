import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Kinmapper',
        loadComponent: () =>
            import('./pages/index/index.component').then((m) => m.IndexComponent),
    },
    {
        path: 'kinmap/:uuid',
        title: 'Kinmap',
        loadComponent: () =>
            import('./pages/kinmap/kinmap.component').then((m) => m.KinmapComponent),
    },
];