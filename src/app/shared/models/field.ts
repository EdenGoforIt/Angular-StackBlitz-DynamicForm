export class Field<T> {
  /**
   * field type if the field is input, radio button or checkbox
   */
  fieldType: string;

  /**
   * field name will be used to uniquely identify the form element
   * as well as two-way binding
   * thus property name of the class and field name should be matched
   */
  name?: string;

  /**
   * class to be applied to the element
   */
  class?: string;
  /**
   * class to be applied to a big higher element such as <mat-form-field>
   */
  parentClass?: string;

  /**
   * place holder
   */
  placeHolder?: string;

  /**
   * if the element is required
   */
  required: boolean = false;

  /**
   * if element is disabled
   */
  disabled: boolean = false;

  /**
   * order the element by priority
   */
  priority?: number;

  /**
   * default value
   */
  value: T;

  /**
   * label of the element
   */
  label: string;

  /**
   * element type such as if the input is text or number
   */
  type: string;

  constructor(data?: Partial<Field<any>>) {
    this.name = data?.name;
    this.fieldType = data?.fieldType;
    this.class = data?.class;
    this.parentClass = data?.parentClass;
    this.placeHolder = data?.placeHolder;
    this.required = data?.required;
    this.priority = data?.priority;
    this.label = data?.label;
    this.type = data?.type;
  }
}
