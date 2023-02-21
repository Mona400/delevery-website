import { Component, OnInit, EventEmitter } from '@angular/core';
import { PickerInteractionMode } from 'igniteui-angular';
import { CartService } from '../../services/cart.service';
import * as mdb from 'mdb-ui-kit'; // lib

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
   cart_payload;
   test_payLoad
  constructor(public myService: CartService) {

    this.cart_payload= JSON.parse(localStorage.getItem("cart")) ;
    this.test_payLoad= {
      userID: '63e20ea4955f761937b0e749',
      username: 'username',
      meals: [],
      monthly_price: 111,
      Dates: ['h:m Am' , 'asd' , 'asd'],
      ExpirationDate: new Date(),
      substate: 'pending',
    };
  }

  meals = {
    breakfast: {
      _id: '63ed9ebcf87491548dc1076e',
      title: 'Money Market Account',
      description: 'Nisi maiores praesentium veritatis neque eaque fuga.',
      price: 106.68,
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy…',
      restaurantID: '63ed93d87021063fad6282a0',
      hasChoices: false,
      SectionName: 'breakfast',
      sectionId: '63e242951baea9c9e47ec76f',
      createdAt: '2023-02-16T03:10:52.702+00:00',
      updatedAt: '2023-02-16T08:42:43.272+00:00',
    },
    dinner: {
      _id: '63ed9ebcf87491548dc1076e',
      title: 'Money Market Account',
      description: 'Nisi maiores praesentium veritatis neque eaque fuga.',
      price: 106.68,
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy…',
      restaurantID: '63ed93d87021063fad6282a0',
      hasChoices: false,
      SectionName: 'breakfast',
      sectionId: '63e242951baea9c9e47ec76f',
      createdAt: '2023-02-16T03:10:52.702+00:00',
      updatedAt: '2023-02-16T08:42:43.272+00:00',
    },
    lunch: {
      _id: '63ed9ebcf87491548dc1076e',
      title: 'Money Market Account',
      description: 'Nisi maiores praesentium veritatis neque eaque fuga.',
      price: 106.68,
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy…',
      restaurantID: '63ed93d87021063fad6282a0',
      hasChoices: false,
      SectionName: 'breakfast',
      sectionId: '63e242951baea9c9e47ec76f',
      createdAt: '2023-02-16T03:10:52.702+00:00',
      updatedAt: '2023-02-16T08:42:43.272+00:00',
    },
  };
  Restaurant = '';
  DateCreated = '';
  DateExpaired = '';
  public mode: PickerInteractionMode = PickerInteractionMode.DropDown;
  myEvent = new EventEmitter();

  Add() {
    let subscribtion = {
      restaurant: this.Restaurant,
      dateCreated: this.DateCreated,
      dateExpired: this.DateExpaired,
    };
    let date = new Date();
    date.setMonth(date.getMonth() + 1);

    this.cart_payload = {...this.test_payLoad ,
      restaurantID:"63eda2b3163ab93f5e725b39",
      restaurantName:"Transvaal lion",
      restaurantImg:"https://images.unsplash.com/photo-1460134583608-5f5d1dd1d61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTExNTR8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50JTIwbG9nb3xlbnwwfHx8fDE2NzY1MzgzNjA&ixlib=rb-4.0.3&q=80&w=400"
       , meals : [...(this.cart_payload.map(el => el._id))]}
    console.log(this.cart_payload);


    this.myService.createSubscribtion(this.cart_payload).subscribe({
      next: (res) => {
        // console.log(res);
      },
      error(err) {
        console.log(err);
      },
    });
  }
  removeCartItem(id){
    this.cart_payload = this.cart_payload.filter(meal => meal._id !== id);

    localStorage.setItem("cart" , JSON.stringify( this.cart_payload))
  }
  getData(data: any) {
    console.log(data);
  }
  ngOnInit(): void {}
}
