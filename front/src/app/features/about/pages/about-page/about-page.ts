import { Component } from '@angular/core';
import { MemberCards } from '../../components/member-cards/member-cards';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-page',
  imports: [MemberCards, RouterLink],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {}
