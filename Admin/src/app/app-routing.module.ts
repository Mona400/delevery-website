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
var routes: Routes  = [
  // {path:"products",component:AllProductsComponent},
  // {path:"details/:id",component:ProductDetailsComponent},
  // {path:"cart",component:CardComponent},
  // {path:"**",redirectTo:"cart" ,pathMatch:"full"},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

