import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { InputFieldComponent } from './input/input.field.component';

@NgModule({
  declarations: [InputFieldComponent, DynamicFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputFieldComponent, DynamicFormComponent],
})
export class DynamicFormModule {}
