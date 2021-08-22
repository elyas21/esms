import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/model/User';
import { StudentService } from 'src/app/service/user/student.service';
import { AuthService } from 'src/app/core/serivice/auth.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectSectionModalComponent } from '../../select-section-modal/select-section-modal.component';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-assign-stu',
  templateUrl: './assign-stu.component.html',
  styleUrls: ['./assign-stu.component.scss']
})
export class AssignStuComponent implements OnInit {
  currentUser: User;
  selectedStu;
  stuId;
  stuGrade: number;
  editGrade = false;

  constructor(
    private stuSer: StudentService,
    public authenticationService: AuthService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
    console.log(this.currentUser);
  }

  ngOnInit() {}

  openDialog() {
    console.log(this.selectedStu.currentGrade);
    if (this.selectedStu.currentGrade == undefined) {
      alert('first Add current Grade');
      return;
    }
    this.dialog
      .open(SelectSectionModalComponent, {
        data: { grade: this.selectedStu.currentGrade },
        height: '400px',
        width: '600px'
      })
      .afterClosed()
      .pipe(tap(res => this.assignToSection(this.selectedStu, res.id)))
      .subscribe(res => {
        console.log(res);
      });
  }

  changeEditable() {
    this.editGrade = !this.editGrade;
  }
  saveGrade() {
    console.log(this.stuGrade);
    this.stuSer
      .update({ studentId: this.selectedStu.studentId, currentGrade: this.stuGrade })
      .subscribe(res => {
        this.selectedStu.currentGrade = this.stuGrade;
      });
  }
  onSubmit(value) {
    value.school = this.currentUser.school;
    console.log(this.stuId);
    this.stuSer.getOneBySchool(this.stuId).subscribe(res => {
      this.selectedStu = res;
      console.log(this.selectedStu);
    });
  }

  assignToSection(student, section) {
    console.log(this.currentUser.School.currentClassYear);
    // if(this.selectedStu.)
    if (student.sex === 'male') {
      this.stuSer
        .secAssign({
          school: this.currentUser.school,
          classYear: this.currentUser.School.currentClassYear,
          section,
          sex: student.sex,
          currentGrade: student.currentGrade,
          studentId: student.studentId
        })
        .subscribe(res => {
          if (res.hasOwnProperty('SectionId')) {
            this.stuSer.getOneBySchool(this.stuId).subscribe(res => {
              this.selectedStu = res;
              console.log(this.selectedStu);
            });
          }
        });
    }

    if (student.sex === 'female') {
      this.stuSer
        .secAssign({
          school: this.currentUser.school,
          classYear: this.currentUser.School.currentClassYear,
          section,
          sex: student.sex,
          currentGrade: student.currentGrade,
          studentId: student.studentId
        })
        .subscribe(res => {
          if (res.hasOwnProperty('SectionId')) {
            this.stuSer.getOneBySchool(this.stuId).subscribe(res => {
              this.selectedStu = res;
              console.log(this.selectedStu);
            });
          }
        });
    }
  }

  remove(stu, section, sex) {
    console.log(stu);

    const obj = {
      school: this.currentUser.school,
      studentId: stu,
      classYear: this.currentUser.School.currentClassYear,
      section,
      sex
    };
    this.stuSer.removeSectionAssign(obj).subscribe(x => {
      console.log(x);
    });
  }
}
