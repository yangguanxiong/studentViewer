
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private students: IStudent[];
  private enrollmentHistory: IEnrollmentHistory[];
  private assignmentHistory: IAssignmentHistory[];
  private selectedStudent: IStudent;

  constructor(private _dataSvc: DataService) {
    _dataSvc.getStudents().subscribe(data => {
      console.log(data);
      this.students = data;
    });
  }

  handleSelectStudent(student): void {
    this.selectedStudent = student;
    this.updateStudentDetails();
  }

  updateStudentDetails(): void {
    if (this.selectedStudent && this.selectedStudent.studentId) {
      this._dataSvc.getAssignmentHistory(this.selectedStudent.studentId)
        .subscribe(data => {
          this.assignmentHistory = data;
        });

      this._dataSvc.getEnrollmentHistory(this.selectedStudent.studentId)
        .subscribe(data => {
          this.enrollmentHistory = data;
        });

    }
  }

  ngOnInit() {
  }

}
