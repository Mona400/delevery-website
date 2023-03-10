import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { SignUpService } from './service/sign-up.service';
import Swal from 'sweetalert2';
import { LoginService } from '../service/login.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent  implements  OnInit {
  get passwordInput() { return this.myRegisterationForm.get('password'); }
  hide = true;

  constructor(private myservice:SignUpService , private loginService:LoginService , public sh:SharedService){}







  // userData:{firstName:string,lastName:string,userName:string ,
  //   Date_of_birth:string,email:string,address?:string,passward:string,type?:string ,subscriptions:any}
  myRegisterationForm = new FormGroup({


     firstName: new FormControl("",[Validators.required ,Validators.minLength(3),Validators.maxLength(20) ]),
     lastName: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20) ]),
     username: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
     gender: new FormControl(),
     DOB: new FormControl("",[Validators.required ]),
     email: new FormControl("",[Validators.required,Validators.email]),
     address: new FormControl("",[Validators.max(40), Validators.min(20)]) ,
     password: new FormControl("",[Validators.required])



     })

    //  get firstNamevalid(){
    //   return this.myRegisterationForm.get("firstName")
    //  }

    //  get passValid(){
    //   return this.myRegisterationForm.controls["passward"].valid; /// returns true or false
    // };


    newuser:any ;
    ngOnInit(): void {





    }



   async Add() {

      if(this.myRegisterationForm.valid){
        console.log(this.myRegisterationForm.value)
        this.myservice.addnewuser({...this.myRegisterationForm.value , type:'user'})
        .subscribe({
          next: async (res)=>{
        //  await  Swal.fire("Logged in Successfully", ` Thank you for signing up `, "success");


          this.loginService.LoginMeIn({username:this.myRegisterationForm.value.username , password:this.myRegisterationForm.value.password})
          .subscribe({
            next: async (res)=>{
              console.log(res)
              localStorage.setItem("Loggedin" , "true");
              localStorage.setItem("token" , res['Token-is']);
              console.log(res['user_payload'])
              this.sh.sign_me_in(res['user_payload'])
              localStorage.setItem("user" , JSON.stringify(res['user_payload']))
              await Swal.fire("Logged in Successfully", `Welcome , ${this.myRegisterationForm.value.username} `, "success");
              location.replace('home')
            },
            error: async(err)=>{
             await Swal.fire("Logged in failed", `Wrong Username or Password`, "error");

            },

          })

          },
          error: async ()=>{
            await  Swal.fire("Failed", `something fields were empty or wrong `, "error");

          }
        })
      }else{
        await  Swal.fire("Failed", `something fields were empty or wrong `, "error");

      }

    //   if(this.myRegisterationForm.valid ) {
    //     console.log(this.myRegisterationForm.value)
    //     this.myservice.addnewuser(this.myRegisterationForm.value)
    //     .subscribe({
    //       next:(res)=>console.log
    //     })
    //      // console.log(this.myRegisterationForm.valid);
    //  ; /// get us the object
    //  // this.userData = this.myRegisterationForm.value;

    //   }
    //   else {
    //     alert(" some of fields are empty or  wrong ")
    //   }


      }



    }


























