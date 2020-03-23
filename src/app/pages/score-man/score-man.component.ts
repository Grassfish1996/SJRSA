import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {QuestionBase} from '../../component/dynamic-form/question-base';
import {QuestionService} from '../../component/dynamic-form/question.service';

@Component({
  selector: 'app-score-man',
  templateUrl: './score-man.component.html',
  styleUrls: ['./score-man.component.scss'],
})
export class ScoreManComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions('scoreman');
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
