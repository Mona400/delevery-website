import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LoginService } from '../../service/login.service';


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
      next:(res)=>{
        console.log(res)
        localStorage.setItem("Loggedin" , "true");
        localStorage.setItem("token" , res['Token-is']);
        this.sh.sign_me_in(res['user_payload'])
        sweetAlert("Logged in Successfully", `Welcome Back , ${this.myloginform.value.Email} `, "success");
      },
      error:(err)=>{
        sweetAlert("Logged in failed", `Wrong Username or Password`, "error");

      }
    })



  // if(this.myloginform.valid )
  //  {
  //   console.log(this.myloginform.value);
  //   this.myservice.LoginMeIn({username:this.myloginform.value.Email , password:this.myloginform.value.passward})
  //   .subscribe({
  //     next:(res)=>console.log
  //   })
  // }
  // else {
  //   alert(" Some of fields are wrong ")
  // }

}

  }
   // console.log(this.myRegisterationForm.valid);
  /// get us the object
 // this.userData = this.myRegisterationForm.value;

    // throw new Error('Method not implemented.');











