import { Injectable } from '@angular/core';
import { Platform } from './game.service';
import {
  faGooglePlay,
  faItchIo,
  faSteam,
  faYoutube,
  faInstagram,
  faTiktok,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

@Injectable({ providedIn: 'root' })
export class IconProvider {
  public platformIcons: Record<string, IconDefinition> = {
    'Itch.io': faItchIo,
    'Play Store': faGooglePlay,
    Steam: faSteam,
    Youtube: faYoutube,
    Instagram: faInstagram,
    Tiktok: faTiktok,
  };

  getIconByPlatform(platform: string): IconDefinition {
    return this.platformIcons[platform];
  }
}
