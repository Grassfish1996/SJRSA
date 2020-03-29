import {HttpHeaders} from '@angular/common/http';

export const baseUrl = "http://localhost:8080/srjs";
export const httpOptions = {
  headers: new HttpHeaders()
    .set('Content-Type','application/json;charset=UTF-8'),
};
