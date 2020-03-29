import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseUrl, httpOptions} from './ApiConst';


@Injectable()

export class SubjectApi {

  private baseUrl = baseUrl + "/subject";

  constructor(
    private http: HttpClient
  ) {
  }

  public list(): Observable<any> {
    return this.http.get(this.baseUrl+'/list');
  }

  public update(subject){
    return this.http.post(this.baseUrl + '/update',subject,httpOptions);
  }

  public add(subject){
    return this.http.post(this.baseUrl + '/add',subject,httpOptions);
  }

  public delete(idlist){
    return this.http.post(this.baseUrl + '/delete',idlist,httpOptions);
  }

}
