// import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
// import { Product } from '../../models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products:Product[] = [];
  categories: string[] = [];
  loading: boolean = true;
  cartProducts: any[] = [];
  base64;
  selected_product;
  form:FormGroup
  // color =["red","green","yrr"]
  constructor(private service: ProductsService , private activeRoute:ActivatedRoute , public build:FormBuilder) {
    this.form = build.group({
      title:['',Validators.required],
      price:[null,[]],
      description:['',[]],
      image:['',[]]
    })
  }

  getImagePath(event){
    const file = event.target.files[0];
    this.selected_product.image = file;
    console.log(this.selected_product)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
       this.base64 = reader.result;
       this.form.get('image')?.setValue(this.base64)
      // console.log(this.base64)
    };
  }

  Objectfilter(anyobj:{}){
    for(let entry in anyobj){
      if(anyobj[entry] == '' || anyobj[entry] == null){
        delete anyobj[entry]
      }


    }
    delete anyobj["image"]
    return anyobj
  }
  updateMeal(img){
    let all_data;
    if(typeof this.selected_product.image == 'string'){
      this.selected_product.image = this.form.value['image']
      delete this.selected_product.image;

    }
    all_data = { ...this.selected_product , ...this.Objectfilter(this.form.value)}
    console.log(all_data)

    let form_payload = new FormData();

      for( let entry in all_data){
        form_payload.append(entry , all_data[entry] )
      }

    console.log(form_payload.getAll("image"))

    this.service.UpdateMeal(this.selected_product._id , this.selected_product.restaurantID , form_payload)
     .subscribe({next: async (res)=>{
      await sweetAlert("Done" , `${this.selected_product.title} has been updated successfully` , 'success')

      this.products = this.products.map(product => {
        if(product.id == this.selected_product._id){
          return {...this.selected_product , ...this.form.value}
        }
        return product
      })

    }})
  }

  DeleteMeal(item){
    console.log(item)
    this.service.DeleteMeal(item._id , item.restaurantID)
     .subscribe({next: async (res)=>{
      await sweetAlert("Done" , `${item.title} has been Deleted successfully` , 'success')
      this.products = this.products.filter(product => product['_id'] != item._id)


    }})
  }
  pushme(item:any){
    console.log(item)
    this.base64 = item.image
    this.selected_product = item
    this.form.setValue({title:item.title , price:item.price , description:item.description,
      image:item.image
    })


  }



  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params["id"])
     this.getProducts(this.activeRoute.snapshot.params["id"]);
    // this.getCategories();

  }
  getProducts(restID:number) {
    this.service.getAllProducts(restID).subscribe(
      (res: any) => {
        this.products = res;
        console.log(res);
      },
      (error) => {
        //alert(error);
      }
    );
  }
  getCategories() {
    this.service.getAllCategories().subscribe(
      (res: any) => {
        console.log(res);
        this.categories = res;
      },
      (error) => {
      //  alert(error);
      }
    );
  }
  filterCategory(event: any) {
    let value = event.target.value;
    if (value == 'all') {
      this.getProducts(this.activeRoute.snapshot.params["id"]);
    } else {
      this.getProductsCategory(value);
    }
    console.log(value);
  }
  getProductsCategory(keyword: string) {
    this.service.getProductByCategory(this.activeRoute.snapshot.params["id"] , keyword).subscribe((res: any) => {
      this.products = res;
    });
  }
  addToCart(event: any) {
    console.log(event);
    // in the local storage
    if ("card" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("card")!);
     let exist = this.cartProducts.find(item => item.item.id == event.item.id);
    //  let exist = this.cartProducts.find((item) => item.item.id == event.item.id);
     // this.searchVehicleId = this.description.find(x => x.id === x.id).id.toString();
      if (exist) {
        alert('Product is already in your cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('card', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('card', JSON.stringify(this.cartProducts));
    }
  }
}
