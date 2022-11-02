import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEemple1Component } from './form-eemple1/form-eemple1.component';
import { FormExemple2Component } from './form-exemple2/form-exemple2.component';
import { FormControlValidationComponent } from './form-control-validation/form-control-validation.component';
import { NgFomControlComponent } from './ng-fom-control/ng-fom-control.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageHomeComponent } from './page-home/page-home.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FormEemple1Component,
    FormExemple2Component,
    FormControlValidationComponent,
    NgFomControlComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageNotFoundComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
