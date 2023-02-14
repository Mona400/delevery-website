import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { CardsModule } from './cards/cards.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
// var routes: Routes  = []
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductsModule,
    CardsModule,
    SharedModule,
    CommonModule,
    CarouselModule,
    // BrowserModule,
    CardsModule,
    

    //  HttpClientModule,
    //  RouterModule,
    FormsModule,
    //  SpinnerComponent
    //  HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
