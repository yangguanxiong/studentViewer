import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import { Student } from '../models/student';

@Injectable()
export class DataService {

  private key: string = 'YXV0aGVudGljYTpAdXRoM250MWNA'; // encoded authentica:@uth3nt1c@

  constructor(private _http: Http) { }

  getStudents(): Observable<IStudent> {
    let authHeader: Headers = new Headers();
    // authHeader.append('Ocp-Apim-Subscription-Key', this.key); 
    authHeader.append('Authorization', 'Basic ' + btoa('authentica:@uth3nt1c@'));

    let url: string = 'http://interviewapi20170221095727.azurewebsites.net/api/Student/All';
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
