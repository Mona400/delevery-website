import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',

})
export class SharedService {

  constructor() { }

  state={};

  cart={}

  my_checkAuth(){
    if(localStorage.getItem('Loggedin') == 'true') return true;
    return false
  }

  current_user = {
    _id:"63e20ea4955f761937b0e749",
    firstName:"Precious",
    lastName:"Langworth",
    username:"Updated user",
    password:"1235",
    email:"Luz_Franecki@hotmail.com",

    address:[],
    gender:"male",
    DOB:"2023-02-07T08:41:08.727+00:00",
    type:"user",

    subscriptions:[]
      }

}
