import { QuestionBase } from './question-base';

export class CascaderQuestion extends QuestionBase<string> {
  controlType = 'cascader';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
