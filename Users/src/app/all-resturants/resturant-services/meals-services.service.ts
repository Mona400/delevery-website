import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealsServicesService {

  constructor(private http:HttpClient) { }

  getAllMeals(restaurant_id:string){
    return this.http.get( environment.baseApi + `restaurants/${restaurant_id}/meals`)
  }

  getAllMealsByCategory(restaurant_id:string , category:string){
    return this.http.get( environment.baseApi + `restaurants/${restaurant_id}/meals?section=${category}`)
  }
}
