
import { Component, OnInit } from '@angular/core';
// import { Student } from '../models/student';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private students: IStudent[];
  constructor(private _dataSvc: DataService) {
    _dataSvc.getStudents().subscribe(data =>{
      console.log(data.json() );
    });
   }

  ngOnInit() {
  }

}
