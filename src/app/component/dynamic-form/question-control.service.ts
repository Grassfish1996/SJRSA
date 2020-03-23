import { Injectable } from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = new FormControl(question.value || '', this.generateValidatorArr(question));
    });
    return new FormGroup(group);
  }

  generateValidatorArr(question: QuestionBase<string>): ValidatorFn[] {
    const validator = question.validator;
    const validatorArr: ValidatorFn[] = [];
    if (validator.required === true) {
      validatorArr.push(Validators.required);
    }
    if (validator.min > 0) {
      validatorArr.push(Validators.min(validator.min));
    }
    if (validator.max > 0) {
      validatorArr.push(Validators.min(validator.max));
    }
    if (validator.minLength > 0) {
      validatorArr.push(Validators.minLength(validator.minLength));
    }
    if (validator.maxLength > 0) {
      validatorArr.push(Validators.maxLength(validator.maxLength));
    }
    if (validator.pattern !== '') {
      validatorArr.push(Validators.pattern(validator.pattern));
    }
    if (validator.email === true) {
      validatorArr.push(Validators.email);
    }
    return validatorArr;
  }

}
