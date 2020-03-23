import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {QuestionBase} from '../../../component/dynamic-form/question-base';
import {QuestionService} from '../../../component/dynamic-form/question.service';

@Component({
  selector: 'app-stu-man-form',
  templateUrl: './stu-man-form.component.html',
  styleUrls: ['./stu-man-form.component.scss']
})
export class StuManFormComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions('stuman');
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
