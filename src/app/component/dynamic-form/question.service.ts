import { Injectable } from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import {Observable, of} from 'rxjs';
import {DynamicFormService} from '../../api/DynamicFormService';
import {map} from 'rxjs/operators';
import {DatepickerQuestion} from './question-datepicker';
import {RadiogroupQuestion} from './question-radiogroup';
import {CascaderQuestion} from './question-cascader';

@Injectable()
export class QuestionService {

  constructor(
    private dynamicFormService: DynamicFormService,
  ) {
  }

  getQuestions(pagename): Observable<QuestionBase<string>[]> {

    const res = this.dynamicFormService.getFormQuestionsConfig(pagename).pipe(
      map(questionsConfig => {
        return this.generateQuestions(questionsConfig);
      }),
    );

    return res;
  }

  generateQuestions(questionsConfig) {
    const questions: QuestionBase<string>[] = [];
    for (const questionConfig of questionsConfig) {
      questions.push(this.generateQuestion(questionConfig));
    }
    return questions.sort((a, b) => a.order - b.order);
  }

  generateQuestion(questionConfig): QuestionBase<string> {
    let question;
    const controlType = questionConfig.controlType;
    const option = questionConfig.option;
    switch (controlType) {
      case 'textbox':
        question = new TextboxQuestion(option);
        break;
      case 'datepicker':
        question = new DatepickerQuestion(option);
        break;
      case 'radiogroup':
        question = new RadiogroupQuestion(option);
        break;
      case 'dropdown':
        question = new DropdownQuestion(option);
        break;
      case 'cascader':
        question = new CascaderQuestion(option);
        break;
      default:
        question = new TextboxQuestion(option);
        break;
    }

    return question;
  }
}