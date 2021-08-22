import { Role } from './role.enum';
import { Section, Student } from './Student';

export interface User {
  userId: any;
  name: string;
  id: string;
  role: string;
  school: string;
  School?: School;
  token: string;
  Teacher: Teacher;
  sections: Section[];
  Studentsections?: string;
}

export interface School {
  schoolId: string;
  schoolName: string;
  softDelete: boolean;
  DirectorId: string;
  currentClassYear: number;
  lastClassYear: number;
}
export interface Teacher {
  sections: Section[];
}
