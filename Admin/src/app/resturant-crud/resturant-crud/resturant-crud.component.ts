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
  selected_product:{};
  selected_image:File;
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
      rating: ['', [Validators.required]],
      // price: ['', [Validators.required]],
      speciality: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      // category: ['', [Validators.required]]
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
     // alert( error)
     }   )
  }

  getCategories() {
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res
     } , error => {
    //  alert( error)
     })
  }

  getSelectedCategory(event:any) {
    this.form.get('category')?.setValue(event.target.value)
    console.log(this.form)
  }


  getImagePath(event:any) {
    const file = event.target.files[0];
    console.log(file)
    this.selected_image=file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
       this.base64 = reader.result;
       this.form.get('image')?.setValue(this.base64)
      // console.log(this.base64)
    };
  }


  addProduct() {


    const model = this.form.value

    this.service.createProduct({...model , image:this.selected_image})
    .subscribe( async (res:any) => {
      await sweetAlert("Done" , "You Successfully Added a new Restaurant" , "success")
      this.products.push(res)
      console.log(model)

    })
  }

  update(item:any) {
    this.showadd=false;
    this.showupdate=true;
   // console.log(item)
    this.form.patchValue({

       title: item.title,
       rating: item.rating,
       description: item.description,

      speciality: item.speciality,


    })
   console.log(this.form.value)
    this.base64 = item.image
    this.selected_product = item;
  }

  UpdateProduct(){
    console.log({...this.form.value , image:this.selected_image || this.base64})
    this.service.UpdateProduct(this.selected_product['_id'] , {...this.form.value , image:this.selected_image || this.base64} )
    .subscribe({next: async (res)=>{ await sweetAlert("success",`${this.form.value['title']} has been updated` , 'success')},
  error: async (err)=> { await sweetAlert("error",`Somthing is wrong` , 'error')}})
  }

  deleteProduct(data:any){
    if(sweetAlert("Confirmation" , 'are you sure to delete?' , 'info' , {
      buttons:['cancel' , 'delete']
    })){
      this.service.deleteproduct(data._id)
      .subscribe( async res=>{
       await sweetAlert("Done" , `${data.title} has been deleted` , 'success')
       console.log(data._id)
       this.products = this.products.filter(el => el['_id'] != data._id)
       console.log(this.products)
        // this.getProducts();
      })
    }


  }
  // deleteProduct(index: number) {
  //   this.form.splice(index, 1);
  //   this.getProducts();
  //   localStorage.setItem('card', JSON.stringify(this.products));
  // }

}
