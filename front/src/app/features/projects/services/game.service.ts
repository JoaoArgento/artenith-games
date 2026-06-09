import { Injectable } from '@angular/core';
import { Game, GameStatus } from '../models/game.model';

export enum Platform {
  Steam = 'Steam',
  Itchio = 'Itch.io',
  PlayStore = 'Play Store',
}

@Injectable({ providedIn: 'root' })
export class GameService {
  public readonly games: Record<string, Game> = {
    ultimaChance: {
      id: '0',
      title: 'Ultima Chance',
      description: 'Jogasso da porra mermao slk não compensa',
      genres: ['Ação', 'Aventura'],
      imageURL: '',
      status: GameStatus.Finished,
      platforms: [
        {
          icon: '',
          name: Platform.Steam,
          link: '...',
        },
      ],
    },

    gunsAndSkulls: {
      id: '1',
      title: 'Guns and Skulls',
      description:
        'Jogasso da porra mermao slk não compensadsssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      genres: ['Ação', 'Aventura'],
      imageURL: 'hopeless.jpg',
      status: GameStatus.Finished,
      platforms: [
        {
          icon: '',
          name: Platform.Steam,
          link: '...',
        },
      ],
    },

    hopelessDays: {
      id: '2',
      title: 'Hopeless Days',
      description: 'Jogasso da porra mermao slk não compensa',
      genres: ['Ação', 'Aventura'],
      imageURL: 'hopeless.jpg',
      status: GameStatus.Finished,
      platforms: [
        {
          icon: '',
          name: Platform.Steam,
          link: 'https://store.steampowered.com/app/4099000/Hopeless_Days/',
        },
      ],
    },

    idleMiner: {
      id: '3',
      title: 'Idle miner',
      description: 'Jogasso da porra mermao slk não compensa',
      genres: ['Ação', 'Aventura'],
      imageURL: 'hopeless.jpg',
      status: GameStatus.Finished,
      platforms: [
        {
          icon: '',
          name: Platform.PlayStore,
          link: '...',
        },
      ],
    },
  };
}
