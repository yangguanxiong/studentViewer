
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

    _dataSvc.getAssignmentHistory(1).subscribe(data => {
      this.assignmentHistory = data;
      console.log('Assignment History: ');
      console.log(this.assignmentHistory);
    });

    _dataSvc.getEnrollmentHistory(1).subscribe(data => {
      this.enrollmentHistory = data;
      console.log('Enrollment History:');
      console.log(this.enrollmentHistory);
    });
  }


  handleSelectStudent(student): void {
     this.selectedStudent = student;
  }

  ngOnInit() {
  }

}
