import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BaseFormDirective } from '../base-form.directive';

@Component({
  selector: 'app-input-field',
  templateUrl: './input.field.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class InputFieldComponent extends BaseFormDirective {
  constructor(public ngForm: NgForm) {
    super();
  }
}
