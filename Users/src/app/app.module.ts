import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CarouselModule } from '@coreui/angular';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	IgxTimePickerModule,
	IgxInputGroupModule,
	IgxIconModule
 } from "igniteui-angular";
import { ProductsModule } from './products/products.module';
import { CardsModule } from './cards/cards.module';
import { HomeComponent } from './home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { AllResturantsComponent } from './all-resturants/all-resturants/all-resturants.component';
import { ProductCrudComponent } from './product-crud/component/product-crud/product-crud.component';
import { RestDetailsComponent } from './all-resturants/rest-details/rest-details.component';
import { MealsComponent } from './all-resturants/meals/meals.component';
import {CartComponent} from './Alyaa/components/cart/cart.component'
import { SubsComponent } from './profile/components/subs/subs.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './hossam/login/login/login.component';
import { SignUpComponent } from './hossam/sign-up/sign-up.component';


// var routes: Routes  = []

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AllResturantsComponent,
    ProductCrudComponent,
    RestDetailsComponent,
    LoginComponent,
    MealsComponent,
    SubsComponent,
    SignUpComponent

  ],
  imports: [

  BrowserModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    IgxTimePickerModule,
	IgxInputGroupModule,
	IgxIconModule,

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
    MatProgressSpinnerModule,
    SharedModule,
    CommonModule,
    BrowserModule,
    CardsModule,
    CarouselModule,
    ReactiveFormsModule,
    //  HttpClientModule,
    //  RouterModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
