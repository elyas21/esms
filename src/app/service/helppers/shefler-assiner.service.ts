import { Injectable } from '@angular/core';
import { Student, Section, StuSec } from 'src/app/model/Student';
import { StudentService } from '../user/student.service';

export class SheflerAssinerService {
  progress: number;
  constructor(private stuSer: StudentService) {}
  shuffleAsign(boys: Student[], girls: Student[], sections: Section[]) {
    // here sort students by their grade
    const studSec: StuSec[] = [{ studentId: 'dfd', id: 3 }];
    const len = boys.length + girls.length;
    for (let index = 0; index < boys.length || index < girls.length; ) {
      sections.forEach(secs => {
        console.log(index);
        if (boys[index]) {
          this.stuSer
            .secAssign({ section: secs.id, studentId: boys[index].studentId })
            .subscribe(res => console.log(res));
        }

        if (girls[index]) {
          studSec.push({ studentId: girls[index].studentId, id: secs.id });
          this.stuSer
            .secAssign({ section: secs.id, studentId: girls[index].studentId })
            .subscribe(res => console.log(res));
        }
        index++;
        this.progress = ((len - index) / len) * 100;
      });
      // this.stuSer.secAssign(studSec).subscribe(res => console.log(res));
    }
  }
}
