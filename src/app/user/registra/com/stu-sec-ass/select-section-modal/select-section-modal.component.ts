import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SectionService } from 'src/app/service/user/section.service';

@Component({
  selector: 'app-select-section-modal',
  templateUrl: './select-section-modal.component.html',
  styleUrls: ['./select-section-modal.component.scss']
})
export class SelectSectionModalComponent implements OnInit {
  SectionList;
  constructor(
    private secSer: SectionService,
    public dialogRef: MatDialogRef<SelectSectionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  sendSection(section) {
    this.dialogRef.close(section);
  }
  ngOnInit() {
    this.getSections(this.data.grade);
  }

  getSections(id) {
    this.secSer.getAllBySchoolGradeClassYear(id).subscribe(x => {
      this.SectionList = x ? x : [];
      console.log(this.SectionList);
    });
  }
}
