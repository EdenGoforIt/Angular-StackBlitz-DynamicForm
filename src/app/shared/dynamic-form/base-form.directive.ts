import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Field } from '../models/field';
@Directive({
  selector: 'base-form',
})
export class BaseFormDirective {
  @Input() field: Field<any>;
  @Input() value: any;

  @Output() clear = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<any>();

  get val(): any {
    return this.value;
  }

  set val(val: any) {
    this.value = val;
    this.valueChange.emit(this.value);
  }
}
