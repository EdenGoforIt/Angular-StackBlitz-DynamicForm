import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from '../models/field';
@Directive({
  selector: 'base-form',
})
export class BaseFormDirective {
  @Input() field: Field<any>;

  /**
   * value to be used for two-way binding
   */
  @Input() value: any;

  /**
   * clear event
   */
  @Output() clear = new EventEmitter<any>();

  /**
   * value change event
   */
  @Output() valueChange = new EventEmitter<any>();

  get val(): any {
    return this.value;
  }

  set val(val: any) {
    this.value = val;
    this.valueChange.emit(this.value);
  }
}
