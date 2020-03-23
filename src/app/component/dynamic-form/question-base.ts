export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: string;
  type: string;
  errTip: string;
  options: {key: string, value: string}[];
  validator: { required?: boolean; min?: number; max?: number; minLength?: number; maxLength?: number; pattern?: string; email?: boolean };

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      order?: number,
      controlType?: string,
      type?: string,
      errTip?: string,
      validator?: {
        required?: boolean,
        min?: number,
        max?: number,
        minLength?: number,
        maxLength?: number,
        pattern?: string,
        email?: boolean
      }
    }) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.errTip = options.errTip || '';

    if (!options.validator) {
      this.validator = {required: false , min: 0,  max: 0, minLength: 0, maxLength: 0, pattern: '', email: false};
    } else {
      this.validator = {};
      this.validator.required = !!options.validator.required;
      this.validator.min = options.validator.min || 0;
      this.validator.max = options.validator.max || 0;
      this.validator.minLength = options.validator.minLength || 0;
      this.validator.maxLength = options.validator.maxLength || 0;
      this.validator.pattern = options.validator.pattern || '';
      this.validator.email = !!options.validator.email;
    }

  }
}
