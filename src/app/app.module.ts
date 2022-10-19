import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEemple1Component } from './form-eemple1/form-eemple1.component';
import { FormExemple2Component } from './form-exemple2/form-exemple2.component';
import { FormControlValidationComponent } from './form-control-validation/form-control-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormEemple1Component,
    FormExemple2Component,
    FormControlValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
