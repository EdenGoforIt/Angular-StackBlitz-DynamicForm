import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent {

  @Input() fields: .Field<any>[];

}
