export class Field<T> {
  /**
   * field type if the field is input, radio button or checkbox
   */
  fieldType: string;
  name?: string;
  class?: string;
  parentClass?: string;
  placeHolder?: string;
  required: boolean = false;
  disabled: boolean = false;
  priority?: number;
  value: T;
  label: string;

  constructor(data?: Partial<Field<any>>) {
    this.name = data?.name;
    this.fieldType = data?.fieldType;
    this.class = data?.class;
    this.parentClass = data?.parentClass;
    this.placeHolder = data?.placeHolder;
    this.required = data?.required;
    this.priority = data?.priority;
    this.label = data?.label;
  }
}
