import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


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
// var routes: Routes  = []

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllResturantsComponent,
    ProductCrudComponent,
    RestDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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