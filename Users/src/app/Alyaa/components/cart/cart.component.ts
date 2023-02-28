import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { PickerInteractionMode } from 'igniteui-angular';
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

  // meals = {
  //   breakfast: {
  //     _id: '63ed9ebcf87491548dc1076e',
  //     title: 'Money Market Account',
  //     description: 'Nisi maiores praesentium veritatis neque eaque fuga.',
  //     price: 106.68,
  //     image:
  //       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy…',
  //     restaurantID: '63ed93d87021063fad6282a0',
  //     hasChoices: false,
  //     SectionName: 'breakfast',
  //     sectionId: '63e242951baea9c9e47ec76f',
  //     createdAt: '2023-02-16T03:10:52.702+00:00',
  //     updatedAt: '2023-02-16T08:42:43.272+00:00',
  //   },
  //   dinner: {
  //     _id: '63ed9ebcf87491548dc1076e',
  //     title: 'Money Market Account',
  //     description: 'Nisi maiores praesentium veritatis neque eaque fuga.',
  //     price: 106.68,
  //     image:
  //       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy…',
  //     restaurantID: '63ed93d87021063fad6282a0',
  //     hasChoices: false,
  //     SectionName: 'breakfast',
  //     sectionId: '63e242951baea9c9e47ec76f',
  //     createdAt: '2023-02-16T03:10:52.702+00:00',
  //     updatedAt: '2023-02-16T08:42:43.272+00:00',
  //   },
  //   lunch: {
  //     _id: '63ed9ebcf87491548dc1076e',
  //     title: 'Money Market Account',
  //     description: 'Nisi maiores praesentium veritatis neque eaque fuga.',
  //     price: 106.68,
  //     image:
  //       'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy…',
  //     restaurantID: '63ed93d87021063fad6282a0',
  //     hasChoices: false,
  //     SectionName: 'breakfast',
  //     sectionId: '63e242951baea9c9e47ec76f',
  //     createdAt: '2023-02-16T03:10:52.702+00:00',
  //     updatedAt: '2023-02-16T08:42:43.272+00:00',
  //   },
  // };
  Restaurant = '';
  DateCreated = '';
  DateExpaired = '';
  public mode: PickerInteractionMode = PickerInteractionMode.DropDown;
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
