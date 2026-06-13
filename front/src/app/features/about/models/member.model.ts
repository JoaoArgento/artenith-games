import { Skill, Role } from '../enums/about.enums';

export interface Vector2 {
  x: number;
  y: number;
}

export interface Avatar {
  link: string;
  scale: number;
  offset?: Vector2;
  glowColorRgb: string;
}

export interface TeamMember {
  id: string;
  name: string;
  avatar: Avatar;
  roles: Role[];
  skills: Skill[];
}
