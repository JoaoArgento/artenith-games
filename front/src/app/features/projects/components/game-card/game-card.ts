import { Component, computed, inject, input, signal } from '@angular/core';
import { Game } from '../../models/game.model';
import { DomSanitizer } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProvider } from '../../services/icon-provider';
@Component({
  selector: 'app-game-card',
  imports: [FontAwesomeModule],
  templateUrl: './game-card.html',
  styleUrl: './game-card.scss',
})
export class GameCard {
  public readonly iconProvider = inject(IconProvider);
  private readonly sanitizer = inject(DomSanitizer);

  public readonly game = input.required<Game>();

  public readonly backgroundGradient = signal<string>(
    'linear-gradient(rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.85))',
  );
  public readonly backgroundImage = computed(() => {
    const backgroundImageURL =
      this.backgroundGradient() + ',' + 'url(images/' + this.game().imageURL + ')';
    return this.sanitizer.bypassSecurityTrustStyle(backgroundImageURL);
  });
}
