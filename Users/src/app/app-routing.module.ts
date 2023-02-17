import { importProvidersFrom, NgModule } from "@angular/core";
import { provideRouter, RouterModule, Routes } from "@angular/router";
import { CardComponent } from "./cards/components/card/card.component";
import { AllProductsComponent } from "./products/components/all-products/all-products.component";
import { ProductDetailsComponent } from "./products/components/product-details/product-details.component";
import { CommonModule } from "@angular/common";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
import { HomeComponent } from "./home/home/home.component";
import { AllResturantsComponent } from "./all-resturants/all-resturants/all-resturants.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

import { SignupComponent } from "./login/component/signup/signup.component";
import { LoginComponent } from "./login/component/login/login.component";

import { CartComponent } from "./cart-controller/component/cart/cart.component";
import { EditProfileComponent } from "./edit-profile/edit-profile/edit-profile.component";
import { SubscriptionComponent } from "./subscription/subscription/subscription.component";
import { LogoutComponent } from "./login/component/logout/logout.component";
var routes: Routes  = [

  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
      {path:'',redirectTo:'login',pathMatch:"full"},

      {path:"cart-controller",component:CartComponent},

  {path:"all-resturants",component:AllResturantsComponent},
  {path:"subscription",component:SubscriptionComponent},
  {path:"products",component:AllProductsComponent},
{path:"edit-profile",component:EditProfileComponent},
{path:"logout",component:LogoutComponent},
  {path:"home",component:HomeComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"cart",component:CardComponent},
  {path:"**",redirectTo:"home" ,pathMatch:"full"},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

