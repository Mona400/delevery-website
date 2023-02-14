import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private service: CardsService,private build:FormBuilder,private productService:ProductsService) {}
  carts: any[] = [];
  products:any[]=[]
  details:any
total=0
form!:FormGroup
  ngOnInit(): void {
    this.form=this.build.group({
      start:[''],
      end:['']
    })
    this.getAllCarts();
  }
getAllCarts(){
this.service.getAllCarts().subscribe((res:any)=>{
this.carts=res
})
}
applyFilter(){
  let date=this.form.value
  this.service.getAllCarts(date).subscribe((res:any)=>{
    this.carts=res
    // console.log(this.carts)


})}
deleteCart(id:number){
this.service.deleteCart(id).subscribe((res)=>{
  this.getAllCarts()
  alert("Cart deleted successful..")
})
}
view(index:number){
  this.products=[]
this.details=this.carts[index];
for(let x in this.details.products){
  this.productService.getProductById(this.details.products[x].productId).subscribe(res=>{
    this.products.push(({item:res,quantity:this.details.products[x].quantity}))
  })
}
console.log(this.details)
}
}
