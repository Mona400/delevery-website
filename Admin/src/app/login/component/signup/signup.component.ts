import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import  SweetAlert  from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupform!: FormGroup;
  constructor(private _formBuilder: FormBuilder,private _http:HttpClient,private router:Router) {}





  hide=true;




  ngOnInit(): void {
    this.signupform = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['',  [Validators.email , Validators.required]],
      gender: ['male'],
      DOB: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [ Validators.required,]),

    },
    {
      validators: this.password.bind(this)
    }

    );
  }


  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  signup(){
    delete this.signupform.value.confirmpassword
  console.log({...this.signupform.value , type:"admin"})
this._http.post<any>(environment.baseApi + "account/register",{...this.signupform.value , type:"admin"}).subscribe( async res=>{
  await SweetAlert.fire("Done" , `Thank You , ${this.signupform.value.username} for registering` , 'success')
  this.signupform.reset();
  this.router.navigate(['login'])
},async err=>{
  await SweetAlert.fire("Error" , `something fields were empty or wrong` , 'error')
})
  }
}
