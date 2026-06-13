import { Component, inject } from '@angular/core';
import { SocialMediaProvider } from '../../services/social-media.provider';
import { SocialMediaCard } from '../social-media-card/social-media-card';

@Component({
  selector: 'app-social-media-list',
  imports: [SocialMediaCard],
  templateUrl: './social-media-list.html',
  styleUrl: './social-media-list.scss',
})
export class SocialMediaList {
  private readonly socialMediaProvider = inject(SocialMediaProvider);

  public readonly socialMedias = this.socialMediaProvider.socialMedias;
}
