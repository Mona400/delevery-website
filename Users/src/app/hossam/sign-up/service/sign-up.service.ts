import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignUpService   {

  constructor( private myservice:HttpClient) { }



  // newUser:any;

 private BaseURL= "http://localhost:3000";




 /// this functin related to sign up
  addnewuser(newuser:any){

    return this.myservice.post(environment.baseApi + 'account/register' ,newuser ) ;

  }
  // throw new Error('Method not implemented.');
}






