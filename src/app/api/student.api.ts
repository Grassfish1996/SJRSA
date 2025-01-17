import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseUrl, httpOptions} from './ApiConst';


@Injectable()

export class StudentApi {

  private baseUrl = baseUrl + "/student";

  constructor(
    private http: HttpClient
  ) {
  }

  public getStudentList(): Observable<any> {
    return this.http.get(this.baseUrl+'/list');
  }

  public update(student){
    return this.http.post(this.baseUrl + '/update',student,httpOptions);
  }

  public add(student){
    return this.http.post(this.baseUrl + '/add',student,httpOptions);
  }

  public delete(idlist){
    return this.http.post(this.baseUrl + '/delete',idlist,httpOptions);
  }

}
