import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResturantServicesService {

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get(environment.baseApi + 'restaurants');
  }
  getAllCategories() {
    return this.http.get(environment.baseApi + 'restaurants/categories');
  }
  getProductByCategory(keyword:string) {
    return this.http.get(environment.baseApi + 'restaurants/category/'+keyword);
  }
  getProductById(id:any) {
    return this.http.get(environment.baseApi + 'restaurants/'+id);
  }
}
