import { Platform } from './platform.model';

export enum GameStatus {
  Finished,
  InProgress,
}

export interface Game {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  genres: string[];
  status: GameStatus;
  platforms: Platform[];
}
