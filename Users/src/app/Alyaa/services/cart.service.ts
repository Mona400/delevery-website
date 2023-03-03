import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private myCart: HttpClient) {}

  createSubscribtion(data: any) {
    return this.myCart.post(`${environment.baseApi}users/${data.userID}/subs`, data , {
      headers:{
        authorization:localStorage.getItem("token")
      }
    });
  }

  // deleteSubscribtion(data: any) {
  //   return this.myCart.delete(
  //     `${this.BaseUrl}/users/${data.userID}/subs`,
  //     data
  //   );
  // }
}
