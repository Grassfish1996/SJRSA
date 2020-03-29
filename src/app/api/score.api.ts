import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseUrl, httpOptions} from './ApiConst';


@Injectable()

export class ScoreApi {

  private baseUrl = baseUrl + "/score";

  constructor(
    private http: HttpClient
  ) {
  }

  public list(): Observable<any> {
    return this.http.get(this.baseUrl+'/list');
  }

  public update(score){
    return this.http.post(this.baseUrl + '/update',score,httpOptions);
  }

  public add(score){
    return this.http.post(this.baseUrl + '/add',score,httpOptions);
  }

  public delete(idlist){
    return this.http.post(this.baseUrl + '/delete',idlist,httpOptions);
  }

}
