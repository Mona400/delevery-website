import { Component, OnInit, EventEmitter, Input } from '@angular/core';
// import { PickerInteractionMode } from 'igniteui-angular';
import { CartService } from '../../services/cart.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
   cart_payload;
   test_payLoad;
   total_price=0;
   form:FormGroup;
   @Input() color: string;
   loading_stating = true
  constructor(public myService: CartService , private _router:Router , public sh:SharedService , public build:FormBuilder) {
    this.form = build.group({
      c_number:['' , Validators.required],
      c_name:['' , Validators.required],
      expire:['' , Validators.required],
      cvv:['' , Validators.required],
    })

  }

  Restaurant = '';
  DateCreated = '';
  DateExpaired = '';
  // public mode: PickerInteractionMode = PickerInteractionMode.DropDown;
  myEvent = new EventEmitter();

  async Add() {

    console.log(this.form.value)

    if(!this.form.valid){
      await  swal.fire("Sorry", "You Need to fill your data", "info");

      return;
    }
    let date = new Date();
    date.setMonth(date.getMonth() + 1);
    // "Confirmation", `this subscription will last till ${date}`, "info"
    if((await swal.fire({title:"Confirmation" , text:`this subscription will last till ${date}` , icon:"info"})).isConfirmed ){

      let {restaurantID , restaurantName , restaurantImg} = this.cart_payload[0]
    this.cart_payload = {...this.test_payLoad ,
      ExpirationDate:date,
      restaurantID , restaurantName , restaurantImg,
      substate:'pending',
      Dates:[...(this.cart_payload.map(el => el.Date ))],
      monthly_price:this.total_price,
      meals : [...(this.cart_payload.map(el => {
       return {...el}
      }))]

      }
    console.log(this.cart_payload);


    this.myService.createSubscribtion(this.cart_payload).subscribe({
      next: async (res) => {
        // console.log(res);
      await  swal.fire("Good job!", "You Have Successfully Subscriped", "success");
      this.cart_payload = []
      localStorage.setItem("cart","[]")

      },
    async  error(err) {
// "Session Timed Out", "You Need to log in", "error" ,
       let res =await swal.fire({
        title:"Session Timed Out",
        text:"You Need to log in",
        icon:"error",
        showCancelButton:true,
        showDenyButton:true,
        showConfirmButton:true
       }  );
        if(res){
          localStorage.setItem("Loggedin" , "false");
          localStorage.setItem("user","{}")
          location.replace("login")
        }
        console.log(err);
      },
    });
    }


  }
  removeCartItem(id){
    this.cart_payload = this.cart_payload.filter(meal => meal._id !== id);
    console.log(this.cart_payload)
    localStorage.setItem("cart" , JSON.stringify( this.cart_payload))
  }
  getData(data: any) {
    console.log(data);
  }
  ngOnInit(): void {
    this.cart_payload= JSON.parse(localStorage.getItem("cart") || '[]') ;
    this.cart_payload.forEach(element => {
      this.total_price += element.price;
    });
    this.test_payLoad= JSON.parse(localStorage.getItem("user"))

    this.test_payLoad['userID']=   this.test_payLoad['_id']
    delete this.test_payLoad['_id'];

    console.log(this.cart_payload)

    this.loading_stating = false
  }
}
