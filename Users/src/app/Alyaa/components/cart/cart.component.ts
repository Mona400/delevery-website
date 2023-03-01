import { Component, OnInit, EventEmitter, Input } from '@angular/core';
// import { PickerInteractionMode } from 'igniteui-angular';
import { CartService } from '../../services/cart.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
   cart_payload;
   test_payLoad;
   total_price=0;
   @Input() color: string;
   loading_stating = true
  constructor(public myService: CartService , private _router:Router , public sh:SharedService) {


  }

  Restaurant = '';
  DateCreated = '';
  DateExpaired = '';
  // public mode: PickerInteractionMode = PickerInteractionMode.DropDown;
  myEvent = new EventEmitter();

  Add() {

    let date = new Date();
    date.setMonth(date.getMonth() + 1);

      let {restaurantID , restaurantName , restaurantImg} = this.cart_payload[0]
    this.cart_payload = {...this.test_payLoad ,
      ExpirationDate:date,
      restaurantID , restaurantName , restaurantImg,
      substate:'active',
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
      await  swal("Good job!", "You Have Successfully Subscriped", "success");
      this.cart_payload = []
      localStorage.setItem("cart","[]")

      },
    async  error(err) {

       let res =await swal("Session Timed Out", "You Need to log in", "error" , {
          buttons:['cancel' , 'login']
        });
        if(res){
          localStorage.setItem("Loggedin" , "false");
          localStorage.setItem("user","{}")
          location.replace("login")
        }
        console.log(err);
      },
    });
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
    this.cart_payload= JSON.parse(localStorage.getItem("cart")) ;
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
