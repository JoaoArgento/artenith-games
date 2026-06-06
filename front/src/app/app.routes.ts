import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout').then((c) => c.MainLayout),
    loadChildren: () => import('./core/routes/features.routes').then((r) => r.routes),
  },
];
