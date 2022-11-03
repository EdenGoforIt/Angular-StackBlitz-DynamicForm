import { Field } from './field';

export class InputField extends Field<string> {
  fieldType = 'input';
  type = 'text';
  maxlength?: number = 100;

  constructor(data?: Partial<InputField>) {
    super(data);

    this.type = data?.type;
    this.maxlength = data?.maxlength;
  }
}
