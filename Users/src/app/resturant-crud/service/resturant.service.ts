import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResturantService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getAllProducts() {
    return this.http.get(environment.baseApi + 'products');
  }
  getAllCategories() {
    return this.http.get(environment.baseApi + 'products/categories');
  }
  getProductByCategory(keyword:string) {
    return this.http.get(environment.baseApi + 'products/category/'+keyword);
  }
  getProductById(id:any) {
    return this.http.get(environment.baseApi + 'products/'+id);
  }
  createProduct(model:any){
return this.http.post(environment.baseApi +'products',model)
  }
  deleteproduct(id:number){
    return this.http.delete(environment.baseApi + 'products/'+id)
    .pipe(map((res:any)=>{
return res;
    }))

  }

  // getstudent(){
  //   return this._http.get<any>("http://localhost:3000/products")
  //   .pipe(map((res:any)=>{
  //    return res;

  //   }))
  //  }

}
