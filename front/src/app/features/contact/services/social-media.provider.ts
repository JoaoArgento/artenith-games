import { Injectable } from '@angular/core';
import { SocialMedia } from '../models/social-media.model';

@Injectable({ providedIn: 'root' })
export class SocialMediaProvider {
  public readonly socialMedias: SocialMedia[] = [
    {
      name: 'Steam',
      link: 'https://store.steampowered.com/search/?developer=Artenith%20Games',
      description: 'Conheça nossos jogos postados na steam!',
    },
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/@ArtenithGames',
      description: 'Assista aos nossos videos',
    },

    {
      name: 'Instagram',
      link: 'https://www.instagram.com/artenithgames/',
      description: 'Novidades do dia a dia',
    },

    {
      name: 'Tiktok',
      link: 'https://www.tiktok.com/@artenithgames',
      description: 'Clipes e momentos engraçados',
    },
  ];
}
