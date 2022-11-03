import { Component, VERSION } from '@angular/core';
import { Field } from './shared/models/field';
import { InputField } from './shared/models/input-field';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: {
    firstName: string;
    lastName: string;
  } = {
    firstName: 'Faker',
    lastName: 'Awesome',
  };

  fields: Field<any>[] = [
    new InputField({
      placeHolder: 'First Name',
      label: 'FirstName',
      name: 'firstName',
    }),
    new InputField({
      placeHolder: 'Last Name',
      label: 'Last Name',
      name: 'lastName',
    }),
  ];

  onSubmit(): void {}
}
