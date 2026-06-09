import { Component, inject } from '@angular/core';
import { GameCard } from '../game-card/game-card';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  imports: [GameCard],
  templateUrl: './game-list.html',
  styleUrl: './game-list.scss',
})
export class GameList {
  public readonly gameService = inject(GameService);
  public readonly games = Object.values(this.gameService.games);
}
