import {Injectable} from '@angular/core';
import {formQuestionsConfig} from '../statics/FormQuestionsConfig';
import {Observable, of} from 'rxjs';


@Injectable()
export class DynamicFormService {

  constructor() {
  }

  getFormQuestionsConfig(pagename: string): Observable<object[]> {
    return of(formQuestionsConfig[pagename]);
  }
}
