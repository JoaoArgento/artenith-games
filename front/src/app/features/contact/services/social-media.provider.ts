import { Injectable } from '@angular/core';
import { SocialMedia } from '../models/social-media.model';

@Injectable({ providedIn: 'root' })
export class SocialMediaProvider {
  public readonly socialMedias: SocialMedia[] = [
    {
      logo: '',
      name: 'Steam',
      link: '',
      description: 'Junte-se à nossa comunidade de jogos',
    },
    {
      logo: '',
      name: 'Youtube',
      link: '',
      description: 'Assista aos nossos videos',
    },

    {
      logo: '',
      name: 'Instagram',
      link: '',
      description: 'Novidades do dia a dia',
    },

    {
      logo: '',
      name: 'Tiktok',
      link: '',
      description: 'Clipes e momentos engraçados',
    },
  ];
}
