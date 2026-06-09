import { Routes } from '@angular/router';
import { routePaths } from './route-paths';

export const routes: Routes = [
  {
    path: routePaths.home,
    loadComponent: () =>
      import('../../features/home/pages/hero-page/hero-page').then((c) => c.HeroPage),
  },
  {
    path: routePaths.projects,
    loadComponent: () =>
      import('../../features/projects/components/game-list/game-list').then((c) => c.GameList),
  },

  {
    path: routePaths.about,
    loadComponent: () =>
      import('../../features/about/pages/about-page/about-page').then((c) => c.AboutPage),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
