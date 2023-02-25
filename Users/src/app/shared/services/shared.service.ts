import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',

})
export class SharedService {

  constructor() { }

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



}
