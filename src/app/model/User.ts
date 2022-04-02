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
  School: School;
  googleId: string;
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

export interface Staff {
  staffId: string;
  staffFirstName: string;
  staffMiddleName: string;
  staffLastName: string;
  role: Role;
  school: string;
}

export interface Pagination {
  first: string;
  next: string;
  last: string;
  prev: string;
}
export interface PaginatedResult<T> {
  result: T;
  pagination: Pagination;
}
