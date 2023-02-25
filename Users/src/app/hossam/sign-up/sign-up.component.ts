import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { SignUpService } from './service/sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent  implements  OnInit {

  constructor(private myservice:SignUpService ){}







  // userData:{firstName:string,lastName:string,userName:string ,
  //   Date_of_birth:string,email:string,address?:string,passward:string,type?:string ,subscriptions:any}
  myRegisterationForm = new FormGroup({


     firstName: new FormControl("",[Validators.required ,Validators.minLength(3),Validators.maxLength(20) ]),
     lastName: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20) ]),
     username: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
     gender: new FormControl(),
     DOB: new FormControl("",[Validators.required ]),
     email: new FormControl("",[Validators.required,Validators.pattern(" /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/")]),
     address: new FormControl("",[Validators.max(40), Validators.min(20)]) ,
     password: new FormControl("",[Validators.max(40), Validators.min(20)])



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



    Add() {


      console.log(this.myRegisterationForm.value)
      this.myservice.addnewuser({...this.myRegisterationForm.value , type:'user'})
      .subscribe({
        next:(res)=>{
          sweetAlert("Logged in Successfully", ` Thank you for signing up `, "success");
          location.replace('home')
        }
      })
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


























