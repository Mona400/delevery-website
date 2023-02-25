import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupform!: FormGroup;
  constructor(private _formBuilder: FormBuilder,private _http:HttpClient,private router:Router) {}
  ngOnInit(): void {
    this.signupform = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['male', Validators.required],
      DOB: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  signup(){
  console.log({...this.signupform.value , type:"admin"})
this._http.post<any>(environment.baseApi + "account/register",{...this.signupform.value , type:"admin"}).subscribe(res=>{
  sweetAlert("Done" , `Thank You , ${this.signupform.value.username} for registering` , 'success')
  this.signupform.reset();
  this.router.navigate(['login'])
},err=>{
  sweetAlert("Error" , `something went wrong` , 'error')
})
  }
}
