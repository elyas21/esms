export interface Student {
  studentId: string;
  sex: string;
  studentName: string;
  regCandidate: boolean;
  lastGrade: string;
  currentGrade: string;
  Studentsections: string;
  school: string;
  sectionMap: number;
  gradeMap: number;

  paymentInfo: number;
}
export enum Sex {
  male,
  female
}

export interface Section {
  id: number;
  sectionId: string;
  classYear: number;
  grade: number;
  noOfMaleStudents: number;
  noOfFemaleStudents: number;
  gradeNo: number;
}

export interface StuSec {
  studentId: string;
  id: number;
}
