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
    street: string;
    phone: number;
  } = {
    firstName: 'aaaa',
    lastName: 'bbbbb',
    street: 'street',
    phone: 3223432,
  };

  fields: Field<any>[] = [
    new InputField({
      placeHolder: 'First Name',
      label: 'FirstName',
      name: 'firstName',
      priority: 3,
    }),
    new InputField({
      placeHolder: 'Last Name',
      label: 'Last Name',
      name: 'lastName',
      priority: 2,
    }),
    new InputField({
      placeHolder: 'Strret',
      label: 'Street',
      name: 'street',
      priority: 1,
    }),
    new InputField({
      placeHolder: 'Phone Number',
      label: 'Phone Number',
      name: 'phone',
      priority: 0,
    }),
  ];

  onSubmit(event: any): void {
    event.preventDefault();
    console.log('got data', this.data);
  }
}
