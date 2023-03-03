import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   *
   */

  current_user
  form:FormGroup;
  constructor(public sh:SharedService , public build:FormBuilder) {


  }
  ngOnInit(): void {
    if(this.sh.my_checkAuth()){
      this.current_user = JSON.parse(localStorage.getItem("user"))
    }
    this.form = this.build.group({
      username:[this.current_user.username,[]],
      firstName:[this.current_user.firstName,[]],
      lastName:[this.current_user.lastName,[]],
      email:[this.current_user.email,[]],
      address:[this.current_user.address,[]],
      password:['',[]]

    })
  }
  backme(){

    document.querySelectorAll(".modal-body").forEach( e => e["style"].display='none' )
    document.getElementById('general').style.display='block'
  }
  show(id){
    // document.getElementById('general').style.display='none'
    // document.getElementById(id).style.display='block'
  }
  auth_flag = this.sh.my_checkAuth()
  id:any
  logout(){
    localStorage.setItem("Loggedin","false")
    localStorage.setItem("user","{}")
    localStorage.setItem("cart","[]")
    location.replace("/home")
  }
  drop(param:any){
    if(this.id==param){
      this.id=" "
    }
    else{
      this.id=param;
    }

  }

  async UpdateUser(pass,repass){


    if(pass.value != repass.value){
      await swal.fire("failed" , "Please Ensure that the passwords match" , 'error');
    }else{
      if(pass.value == ''){
        delete this.form.value.password
      }else{
        this.form.value.password = pass.value
      }

      console.log({  ...this.form.value })
      console.log(this.current_user._id)
      this.sh.UpdateUser(this.current_user._id , {...this.form.value})
      .subscribe({
        next: async (res)=>{
          await swal.fire("success",'You have succesfully Updated Your Profile' , 'success')
          this.current_user = {...this.current_user._id , ...this.form.value}
          localStorage.setItem("user",JSON.stringify( this.current_user))
        },
        error:async(err)=>{
          await swal.fire("failure",'Somthing Wrong Has Happened ' , 'error')

        }
      })
    }

  //  this.userService.UpdateUser()
}
}
