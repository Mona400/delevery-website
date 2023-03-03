import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }

  getAllCarts(  param?:any  ) {
    // let params = new HttpParams()
    // params = params.append("startDate" , param?.start).append("endDate" , param?.end)
    return this.http.get(environment.baseApi + `admin/subs` , {headers:{
      authorization:localStorage.getItem("token")
    }} )
  }

  deleteCart(id:number) {
    return this.http.delete(environment.baseApi + 'admin/subs/' + id)
  }

  UpdateState(id:number , payload) {
    return this.http.patch(environment.baseApi + 'admin/subs/' + id , payload)
  }

}
