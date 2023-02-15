// import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
// import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {

  constructor(private service: ProductsService,private build:FormBuilder) {}

  ngOnInit(): void {
  }
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

}
