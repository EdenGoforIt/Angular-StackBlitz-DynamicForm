import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicFormComponent } from './shared/dynamic-form/dynamic-form.component';
import { DynamicFormModule } from './shared/dynamic-form/dynamic-form.module';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DynamicFormModule,
    DynamicFormModule,
  ],
  declarations: [AppComponent, HelloComponent, DynamicFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
