import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  title = 'Ecommerce';
  id:any
  drop(param:any){
    if(this.id==param){
      this.id=" "
    }
    else{
      this.id=param;
    }

  }

  constructor(){}
  url:string="../assets/laugh.png"
  url_2:string="../assets/laugh.png"
  url_3:string="../assets/laugh.png"
  url_4:string="../assets/laugh.png"

  changeImage(event:any){
    this.url=event.target.src;

  }
  changeImage_2(event:any){
    this.url_2=event.target.src;

  }
  changeImage_3(event:any){
    this.url_3=event.target.src;

  }
  changeImage_4(event:any){
    this.url_4=event.target.src;

  }

  partnerArray:any=[
    {
      imgName:"../assets/laugh.png"
    },
    {
      imgName:"../assets/laugh.png"
    },
    {
      imgName:"../assets/laugh.png"
    },
    {
      imgName:"../assets/laugh.png"
    },
    {
      imgName:"../assets/laugh.png"
    },
    {
      imgName:"../assets/laugh.png"
    },
  ]

bannerSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:false,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 6
      },
      400: {
        items: 6
      },
      740: {
        items: 6
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

policyOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots:false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  days:any=194;
  hours:any=22;
  mins:any=14;
  secs:any=4;

  x=setInterval(()=>{
    var futureDate=new Date("Mar 4,2023 15:34:24").getTime();//getTime Convert date to ms
    var today=new Date().getTime();
    var distance=futureDate-today;
    this.days=Math.floor(distance/(1000 * 60 * 60 *24) )
    this.hours=Math.floor((distance % (1000 * 60 * 60 *24))/(1000 * 60 * 60) );
    this.mins=Math.floor((distance % (1000 * 60 * 60 ))/(1000 * 60 ) );
    this.secs=Math.floor((distance % (1000 * 60 ))/(1000  ) );
    if(distance<0){
      clearInterval(this.x);
      this.days="Offer Is Expired"
    }
    console.log(this.hours)
  },1000)

}
