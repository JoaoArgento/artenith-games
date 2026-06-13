import { Component, input } from '@angular/core';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-member-card',
  imports: [],
  templateUrl: './member-card.html',
  styleUrl: './member-card.scss',
})
export class MemberCard {
  public member = input.required<Member>();
}
