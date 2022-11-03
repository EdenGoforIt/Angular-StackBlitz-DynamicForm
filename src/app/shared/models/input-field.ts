import { Field } from './field';

export class InputField extends Field<string> {
  override fieldType = 'input';
  type: string = 'text';
  maxlength?: number = 100;

  constructor(data?: Partial<InputField>) {
    super(data);

    this.type = data?.type;
    this.maxlength = data?.maxlength;
  }
}
