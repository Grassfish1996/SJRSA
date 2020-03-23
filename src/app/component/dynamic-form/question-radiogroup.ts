import { QuestionBase } from './question-base';

export class RadiogroupQuestion extends QuestionBase<string> {
  controlType = 'radiogroup';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
