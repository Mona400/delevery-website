import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'

import { BrowserModule } from '@angular/platform-browser';
// import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,


    //  SpinnerComponent

RouterModule,
HttpClientModule,

  ],
  exports:[
    HeaderComponent,
    // BrowserModule,
    SpinnerComponent,
    // // SpinnerComponent,
    RouterModule,
    FormsModule,
    SelectComponent,
    AppRoutingModule,
    ReactiveFormsModule,




  ]
})
export class SharedModule { }
