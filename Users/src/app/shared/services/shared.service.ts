import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})
export class SharedService {

  constructor(public http:HttpClient) { }

  state={};

  cart={}

  current_user;
  my_checkAuth(){
    if(localStorage.getItem('Loggedin') == 'true') return true;
    return false
  }

  sign_me_in(payload){
    this.current_user = payload
  }

  RetriveUser(){
    return JSON.parse( localStorage.getItem("user"))
  }
  UpdateUser(userID , payload){
    return this.http.patch(environment.baseApi + 'users/'+userID , payload)
  }

}
