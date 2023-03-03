import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder } from '@angular/forms';
import { RouterLink , Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LoginService } from '../../service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent    {


   constructor(private myservice:LoginService , private sh:SharedService) { }

    //********************** */
    // this.myloginform = this.myform.group({
    //   Email:   [Validators.required, Validators.pattern("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/")],
    //   Passward:   [Validators.required ]
/// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

//********************* */

myloginform = new FormGroup ({

  Email: new FormControl ("",[Validators.required ]),
  passward: new FormControl("",[Validators.required])
})


login() {
  console.log(this.myloginform.value);
    this.myservice.LoginMeIn({username:this.myloginform.value.Email , password:this.myloginform.value.passward})
    .subscribe({
      next: async (res)=>{
        console.log(res)
        localStorage.setItem("Loggedin" , "true");
        localStorage.setItem("token" , res['Token-is']);
        console.log(res['user_payload'])
        this.sh.sign_me_in(res['user_payload'])
        localStorage.setItem("user" , JSON.stringify(res['user_payload']))
        await Swal.fire("Logged in Successfully", `Welcome Back , ${this.myloginform.value.Email} `, "success");
        location.replace('home')
      },
      error: async(err)=>{
       await Swal.fire("Logged in failed", `Wrong Username or Password`, "error");

      },

    })


}

  }
   // console.log(this.myRegisterationForm.valid);
  /// get us the object
 // this.userData = this.myRegisterationForm.value;

    // throw new Error('Method not implemented.');











