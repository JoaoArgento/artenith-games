import { Injectable } from '@angular/core';
import { TeamMember } from '../models/member.model';
import { Role, Skill } from '../enums/about.enums';

@Injectable({ providedIn: 'root' })
export class MemberService {
  public readonly members: TeamMember[] = [
    {
      id: '0',
      name: 'João Pedro',
      avatar: {
        link: 'joao.png',
        scale: 1,
        glowColorRgb: '220, 160, 60, 0.6',
      },
      roles: [Role.GameDesigner, Role.Programmer],
      skills: [Skill.CSharp, Skill.Unity],
    },

    {
      id: '1',
      name: 'Felipe Cavalcanti',
      avatar: {
        link: 'felipe.png',
        scale: 1,
        glowColorRgb: '0, 180, 255, 0.6',
      },
      roles: [Role.GameDesigner, Role.Programmer],
      skills: [Skill.CSharp, Skill.Unity],
    },

    {
      id: '2',
      name: 'Taiguara',
      avatar: {
        link: 'taiguara.png',
        scale: 0.8,
        offset: {
          x: 10,
          y: 30,
        },
        glowColorRgb: '160, 60, 220, 0.6',
      },
      roles: [Role.GameDesigner, Role.Artist],
      skills: [Skill.Unity, Skill.Blender],
    },
  ];
}
