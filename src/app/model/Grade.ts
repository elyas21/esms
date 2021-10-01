import { Course } from './Course';

export interface Grade {
  id: string;
  gradeId: string;
  grade: number;
  gradeName: string;
  school: string;
  Coures?: Course;
}
