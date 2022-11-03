import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { InputFieldComponent } from './input/input.field.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [InputFieldComponent, DynamicFormComponent, SortPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputFieldComponent, DynamicFormComponent, SortPipe],
})
export class DynamicFormModule {}
