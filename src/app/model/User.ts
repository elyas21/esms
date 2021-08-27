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

export interface NewUser {
  userId: any;
  firstName: string;
  middleName: string;
  lastName: string;
  id: Role;
  role: string;
  schoolName: string;
  school: School;
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
