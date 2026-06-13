import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';
import { Role, Skill } from '../../enums/about.enums';

@Injectable({ providedIn: 'root' })
export class MemberService {
  public readonly members: Member[] = [
    {
      id: '0',
      name: 'João Pedro',
      avatar: '',
      roles: [Role.GameDesigner, Role.Programmer],
      skills: [Skill.CSharp, Skill.Unity],
    },

    {
      id: '1',
      name: 'Felipe Cavalcanti',
      avatar: '',
      roles: [Role.GameDesigner, Role.Programmer],
      skills: [Skill.CSharp, Skill.Unity],
    },

    {
      id: '2',
      name: 'Taiguara',
      avatar: '',
      roles: [Role.GameDesigner, Role.Artist],
      skills: [Skill.Unity, Skill.Blender],
    },
  ];
}
