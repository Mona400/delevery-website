import { Component } from '@angular/core';
import { MealsServicesService } from './../resturant-services/meals-services.service';
import { ActivatedRoute } from '@angular/router';
import { ResturantServicesService } from './../resturant-services/resturant-services.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent {
  selected_menu='breakfast'
  payload:any = {rest:{} , meals:{}};

  constructor(public MealService:MealsServicesService , public RestService:ResturantServicesService , public currentRoute:ActivatedRoute){
    const id = currentRoute.snapshot.params["id"]
    RestService.getRestaurantById(id).subscribe({
      next:(res)=>{this.payload.rest = res}
    })
    MealService.getAllMeals(id).subscribe({
      next:(res:any)=>{
        this.payload.meals.all = res;
        this.payload.meals.current = res.filter(meal => meal.SectionName == 'breakfast')




      }
    })

  }

  category_click(e){

    if(e.target.classList.contains("nav-link") || e.target.children.length == 0){
      this.selected_menu = e.target.innerText.toLowerCase()
      this.payload.meals.current = this.payload.meals.all.filter(meal => meal.SectionName == e.target.innerText.toLowerCase())

    }
  }

  addToCart(item:any){
   let cart:any = localStorage.getItem("cart")  ?? '[]'
    cart = JSON.parse(cart)
   cart.push(item)
    console.log(cart)
   localStorage.setItem("cart", JSON.stringify(cart))




  }


}
