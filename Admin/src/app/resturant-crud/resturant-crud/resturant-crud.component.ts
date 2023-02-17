import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/products/services/products.service';
import { ResturantService } from '../service/resturant.service';

@Component({
  selector: 'app-resturant-crud',
  templateUrl: './resturant-crud.component.html',
  styleUrls: ['./resturant-crud.component.scss']
})
export class ResturantCrudComponent implements OnInit{
  products:Product[] = [];
  categories:string[] = [];
  loading:boolean = false;
  base64:any = '';
  form!:FormGroup;

  showadd!:boolean;
  showupdate!:boolean;
  constructor(private service:ResturantService , private build:FormBuilder) { }

  add(){
    this.showadd=true;
    this.showupdate=false;

  }

  ngOnInit(): void {
    this.form = this.build.group({
      title: ['' , [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })
    this.getProducts()
    this.getCategories()
  }

  getProducts() {
    this.loading = true
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res
      this.loading = false
     } , error => {
      this.loading = false
      alert( error)
     }   )
  }

  getCategories() {
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res
     } , error => {
      alert( error)
     })
  }

  getSelectedCategory(event:any) {
    this.form.get('category')?.setValue(event.target.value)
    console.log(this.form)
  }


  getImagePath(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
       this.base64 = reader.result;
       this.form.get('image')?.setValue(this.base64)
       console.log(this.base64)
    };
  }


  addProduct() {


    const model = this.form.value

    this.service.createProduct(model).subscribe(res => {
      alert("Add Product Success")
      console.log(model)

    })
  }

  update(item:any) {
    this.showadd=false;
    this.showupdate=true;

    this.form.patchValue({
      title: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,


    })
   console.log(this.form.value)
    this.base64 = item.image
  }

  deleteProduct(data:any){
    if(confirm('are you sure to delete?'))
    this.service.deleteproduct(data.id)
    .subscribe(res=>{
      alert("Recodr delete successfully");
      // this.getProducts();
    })

  }
  // deleteProduct(index: number) {
  //   this.form.splice(index, 1);
  //   this.getProducts();
  //   localStorage.setItem('card', JSON.stringify(this.products));
  // }

}
