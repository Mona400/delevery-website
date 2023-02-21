import { Component } from '@angular/core';
import * as Aos from 'aos';
import Swiper from 'swiper';
// import fs  from "font-awesome";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){
     Aos.init({once: false,easing: 'ease'});
     new Swiper(".mySwiper",{
      pagination:{
        el:".swiper-pagination",
        clickable:true
      }
    })
    }
  title = 'Ecommerce';
}
