import { Component } from '@angular/core';
import { SocialMediaList } from '../../components/social-media-list/social-media-list';

@Component({
  selector: 'app-contact-page',
  imports: [SocialMediaList],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {}
