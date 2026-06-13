import { Component, computed, input } from '@angular/core';
import { TeamMember } from '../../models/member.model';

@Component({
  selector: 'app-member-card',
  imports: [],
  templateUrl: './member-card.html',
  styleUrl: './member-card.scss',
})
export class MemberCard {
  public member = input.required<TeamMember>();

  avatarUrl = computed(() => {
    return `images/${this.member().avatar.link}`;
  });

  avatarTransform = computed(() => {
    const scale = this.member().avatar.scale ?? 1;
    const offset = this.member().avatar.offset ?? { x: 0, y: 0 };
    return `scale(${scale}) translate(${offset.x}px, ${offset.y}px)`;
  });

  dropShadowColor = computed(() => {
    return this.member().avatar.glowColorRgb ?? '255, 255, 255, 1';
  });

  dropShadowHover = computed(() => {
    return this.member().avatar.glowColorRgb ?? '255, 255, 255, 1';
  });
}
