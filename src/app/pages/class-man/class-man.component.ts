import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {QuestionBase} from '../../component/dynamic-form/question-base';
import {QuestionService} from '../../component/dynamic-form/question.service';

@Component({
  selector: 'app-class-man',
  templateUrl: './class-man.component.html',
  styleUrls: ['./class-man.component.scss']
})
export class ClassManComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions('classman');
  }

  ngOnInit(): void {
  }

  onSubmit(form): void {
    // tslint:disable-next-line:forin
    for (const i in form.controls) {
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
    }
    console.log(form.controls);
    console.log(JSON.stringify(form.getRawValue()));
  }

}
