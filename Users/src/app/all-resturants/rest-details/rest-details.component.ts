import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { SharedService } from 'src/app/shared/services/shared.service';
import { ActivatedRoute } from '@angular/router';
// import { NotificationsService } from 'angular2-notifications';



import { ResturantServicesService } from './../resturant-services/resturant-services.service';


import * as Toastify from 'toastify-js';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rest-details',
  templateUrl: './rest-details.component.html',
  styleUrls: ['./rest-details.component.scss']
})
export class RestDetailsComponent  {
  comment:any=""
  review_flag:boolean = false;
  user ;
  loading_state=true;
  payload:any;

  constructor( public State:SharedService , public avtivRoute:ActivatedRoute , public RestService:ResturantServicesService){
    const id = avtivRoute.snapshot.params["id"]
    this.user = State.RetriveUser()
    console.log(this.user)
    RestService.getRestaurantById(id).subscribe({
     next:(res)=>{
      console.log(res)
       this.payload = res;
       this.loading_state = false;

      //  RestService.getRestaurantReviews(id).subscribe({
      //   next:(res)=>{

      //     this.payload.reviews = res

      //   }
      //  })
     }
   })



  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  async AddingReviews(){

    if(!this.State.my_checkAuth()){
      await Swal.fire("Failed" , "Sorry You need to login first","error")
      // Toastify({

      //   text: "You Need To Be Logged In",
      //   duration: 3000,
      //   newWindow: true,
      //   close: true,
      //   gravity: "top", // `top` or `bottom`
      //   position: "center", // `left`, `center` or `right`
      //   stopOnFocus: true, // Prevents dismissing of toast on hover
      //   style: {
      //     background: "red",
      //   },

      //   }).showToast();
    }else{
      this.review_flag=true

    }





  }

  submitMe(){

    let payload = {
      userID: this.user['_id'],
      username:this.user['username'],
      comment: this.comment,
      impression:'good',
      restaurantId: this.payload['_id'],
    }
    this.RestService.PostReview(this.payload['_id'],this.user['_id'] , payload)
    .subscribe({next: async ()=>{

      await Swal.fire("sucess" , "Comment was added successfully","success")
      this.review_flag=false


      this.payload.reviews.push(payload)
    } , error: async () => {
      await Swal.fire("Failure" , "Somthing Went Wrong","error")

    }})



  }


}
