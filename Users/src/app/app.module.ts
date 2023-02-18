import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { SimpleNotificationsModule } from 'angular2-notifications';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';

import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { CardsModule } from './cards/cards.module';
import { HomeComponent } from './home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AllResturantsComponent } from './all-resturants/all-resturants/all-resturants.component';
import { ProductCrudComponent } from './product-crud/component/product-crud/product-crud.component';
import { RestDetailsComponent } from './all-resturants/rest-details/rest-details.component';
import { MealsComponent } from './all-resturants/meals/meals.component';
// var routes: Routes  = []

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllResturantsComponent,
    ProductCrudComponent,
    RestDetailsComponent,
    MealsComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // SimpleNotificationsModule.forRoot({icons: {
    //   success: '<i class="icon-check-sign icon-3x left"></i>',
    //   alert: '<i class="icon-exclamation icon-3x left"></i>',
    //   error: '<i class="icon-bug icon-3x left"></i>',
    //   info: '<i class="icon-info icon-3x left"></i>',
    //   warn: '<i class="icon-warning-sign icon-3x left"></i>'
    // }}),
    ProductsModule,
    CardsModule,
    SharedModule,
    CommonModule,
    BrowserModule,
    CardsModule,
    CarouselModule,
    ReactiveFormsModule,
    //  HttpClientModule,
    //  RouterModule,
     FormsModule,
    //  SpinnerComponent
    //  HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
