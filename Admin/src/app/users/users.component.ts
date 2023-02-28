import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
form:FormGroup
users;
selected_user;
/**
 *
 */
constructor(private build:FormBuilder , public userService:UserServiceService) {

  this.form = build.group({
    username:['',[]],
    firstName:['',[]],
    lastName:['',[]],
    email:['',[]],
    address:['',[]],

  })

}
  ngOnInit(): void {
    this.userService.GetAllUsers()
    .subscribe({
      next:(res)=>{this.users = res}
    })
  }

 async deleteUser(user2){
    if(await sweetAlert("confirmation" , "Are You Sure You Want To delete User "+user2.username , {
      buttons:["cancel" , "Delete"]
    })){
      this.userService.DeleteUser(user2._id)
      .subscribe({
        next: async (res)=>{
          await sweetAlert("Success" , `user ${user2.username} was Deleted Successfully` , 'success')
          this.users = this.users.filter(user => user._id != user2._id)
        }
      })
    }
  }
  view(index){
    this.selected_user = this.users[index]
    this.form.patchValue({
      username:this.users[index].username,
      firstName:this.users[index].firstName,
      lastName:this.users[index].lastName,
      email:this.users[index].email,
      address:this.users[index].address,
    })
  }

  async UpdateUser(){


    let payload = {...this.selected_user , ...this.form.value}
    if(await sweetAlert("confirmation" , "Are You Sure You Want To User "+this.form.value.username , {
      buttons:["cancel" , "Update"]
    })){
      this.userService.UpdateUser(this.selected_user._id , payload)
      .subscribe({
        next: async (res)=>{
         await sweetAlert("Success" , `user ${this.selected_user.username} was updated Successfully` , 'success')
         this.users = this.users.map(user => {
          if(user._id == this.selected_user._id){
            return payload
          }
          return user
         })
        },
        error: async (err)=>{
          await sweetAlert("Failure" , `user ${this.selected_user.username} was'nt updated` , 'error')

        }
      })
    }

  }
}
