import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResturantServicesService {

  constructor(private http:HttpClient) { }
   base = environment.baseApi + 'restaurants'
  getAllRestaurants() {
    return this.http.get(this.base);
  }
  SearchBySlug(slug:string) {
    return this.http.get(this.base +'?search='+slug);
  }

  getProductByCategory(keyword:string) {
    return this.http.get(this.base + '/category/'+keyword);
  }
  getRestaurantById(id:any) {
    return this.http.get(this.base+'/'+id);
  }

  getRestaurantReviews(id:any) {
    return this.http.get(this.base+'/'+id+'/reviews');
  }

  PostReview(Rest_id:string , user_id:any,payload:any){
    return this.http.post(this.base + `/${Rest_id}/users/${user_id}/reviews`,payload)
  }
}
