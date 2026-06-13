import { Skill, Role } from '../../enums/about.enums';

export interface Member {
  id: string;
  name: string;
  avatar: string;
  roles: Role[];
  skills: Skill[];
}
