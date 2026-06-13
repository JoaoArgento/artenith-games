import { Component, inject, input } from '@angular/core';
import { SocialMedia } from '../../models/social-media.model';
import { IconProvider } from '../../../projects/services/icon-provider';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-social-media-card',
  imports: [FaIconComponent, FaIconComponent],
  templateUrl: './social-media-card.html',
  styleUrl: './social-media-card.scss',
})
export class SocialMediaCard {
  private readonly iconProvider = inject(IconProvider);

  public readonly socialMedia = input.required<SocialMedia>();

  public getSocialMediaIcon() {
    const socialMediaName = this.socialMedia().name;

    return this.iconProvider.getIconByPlatform(socialMediaName);
  }
}
