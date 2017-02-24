import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  getStudents(): Observable<IStudent[]> {
    let authHeader: Headers = new Headers();
    authHeader.append('Authorization', 'Basic ' + btoa('authentica:@uth3nt1c@'));

    let url: string = 'http://interviewapi20170221095727.azurewebsites.net/api/Student/All';
    return this._http.get(url, { headers: authHeader })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  getEnrollmentHistory(studentId: number): Observable<IEnrollmentHistory[]> {
    let authHeader: Headers = new Headers();
    authHeader.append('Authorization', 'Basic ' + btoa('authentica:@uth3nt1c@'));
    let url: string = 'http://interviewapi20170221095727.azurewebsites.net/api/Student/EnrollmentHistory?studentId=' + studentId;

    return this._http.get(url, { headers: authHeader })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  getAssignmentHistory(studentId: number): Observable<IAssignmentHistory[]> {
    let authHeader: Headers = new Headers();
    authHeader.append('Authorization', 'Basic ' + btoa('authentica:@uth3nt1c@'));
    let url: string = 'http://interviewapi20170221095727.azurewebsites.net/api/Student/AssignmentHistory?studentId=' + studentId;

    return this._http.get(url, { headers: authHeader })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
