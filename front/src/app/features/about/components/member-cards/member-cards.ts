import { Component, inject } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { MemberCard } from '../member-card/member-card';

@Component({
  selector: 'app-member-cards',
  imports: [MemberCard],
  templateUrl: './member-cards.html',
  styleUrl: './member-cards.scss',
})
export class MemberCards {
  public readonly memberService = inject(MemberService);

  public readonly members = this.memberService.members;
}
