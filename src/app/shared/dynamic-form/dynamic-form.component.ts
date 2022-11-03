import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field } from '../models/field';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent {
  @Input() fields: Field<any>[];
  @Input() data: any;
  @Output() valueChanged = new EventEmitter<any>();

  clear(field: any) {
    this.data[field.fieldName] = null;
  }
  valueChange(field: any, value: any) {
    this.valueChanged.emit({ field, value });
  }
}
