import { Routes } from '@angular/router';
import { routePaths } from './route-paths';

export const routes: Routes = [
  {
    path: routePaths.home,
    loadComponent: () => import('../../features/home/components/hero/hero').then((c) => c.Hero),
  },
  {
    path: routePaths.projects,
    loadComponent: () =>
      import('../../features/projects/components/game-list/game-list').then((c) => c.GameList),
  },

  {
    path: routePaths.about,
    loadComponent: () => import('../../features/about/components/about/about').then((c) => c.About),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
