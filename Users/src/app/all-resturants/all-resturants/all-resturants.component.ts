import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {ResturantServicesService} from '../resturant-services/resturant-services.service'
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-all-resturants',
  templateUrl: './all-resturants.component.html',
  styleUrls: ['./all-resturants.component.scss']
})
export class AllResturantsComponent implements OnInit{
  payload;
  constructor(public restService:ResturantServicesService , public State:SharedService){ }
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

  ngOnInit(): void {
    this.restService.getAllProducts().subscribe({
      next:(res)=>{
        this.payload = res
        this.State.state["commuter"] = res

      }
    })
  }

  getAll(){
    this.restService.getAllProducts().subscribe({
      next:(res)=>{

        console.log(res)
      }
    })
  }
}
