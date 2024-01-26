import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';
import { CommonData } from '../commondata';
import { StarComponent } from '../star/star.component';
import { ProductService } from '../product.service';
import { tap } from 'rxjs';





@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule,CommonModule,ConvertToSpacesPipe,StarComponent],
  templateUrl: './product-list.component.html', 
  styleUrl: './product-list.component.css',
  
})

export class ProductListComponent implements OnInit{
  
  //commonData! : CommonData;

  myStyle ={
    'height.px':400,
    'width.px':260,
    'backgroundColor':'blue',
  }

  //filterBy:string |null = '';
  private _filterBy='' ;

  get filterBy():string{
    return this._filterBy;
  }
  set filterBy(fb:string){
    //console.log(fb);
    this._filterBy=fb;
    this.filterProducts(fb);
  }
  
  errorMessage = null;

  loading = true;

  products$ = this.productService.getProduct()
  .pipe(
    tap(products=>{
      this.loading = false;
      this.products = products;
      this.filteredProducts = products;
    })
  );


  constructor(private productService:ProductService){
    //this.commonData = new CommonData;
  }
  

  ngOnInit(): void {
       /*this.loading = true;  
       this.productService.getProduct().subscribe({
        next: products =>{
          this.loading = false;
          this.products = products;
          this.filteredProducts = products;
        } ,
        error:err=>{
          this.loading = false;
          console.log(err);
          this.errorMessage = err;
        }
      }) */
  }

  products : Product[] = [];


filteredProducts = this.products;

filterProducts (data:any):void{
  this.filteredProducts = this.products.filter(product=>{
    //return product.name.toLowerCase().includes(data.toLowerCase());
    return product.category.toLowerCase().includes(data.toLowerCase());
  });
}



addToCart(product:any, event:any){
  //console.log('add to cart', product.name);
  console.log(event,'hellow event');
 // this.commonData.incrementCartCount();
 this.productService.incrementCartCount();
}

onRatingChange(product:Product , event:number){
  console.log('event',event);
  product.rating = event;

}
}


