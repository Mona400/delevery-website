import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private myCart: HttpClient) {}
  private BaseUrl = 'http://localhost:5000';
  createSubscribtion(data: any) {
    return this.myCart.post(`${this.BaseUrl}/users/${data.userID}/subs`, data);
  }

  // deleteSubscribtion(data: any) {
  //   return this.myCart.delete(
  //     `${this.BaseUrl}/users/${data.userID}/subs`,
  //     data
  //   );
  // }
}
