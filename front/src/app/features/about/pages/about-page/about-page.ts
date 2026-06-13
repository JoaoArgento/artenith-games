import { Component } from '@angular/core';
import { MemberCards } from '../../components/member-cards/member-cards';

@Component({
  selector: 'app-about-page',
  imports: [MemberCards],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {}
