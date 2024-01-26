import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './star/star.component';
import { CommonData } from './commondata';
import { ProductService } from './product.service';
import { count } from 'console';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductListComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Store';

  myClass={
    'bg-primary':true,
    'bg-purple':false
  }
  showNavbar = false;

  currentTheme ='primary';

  cartValue = this.productService.cartCount$;

 // commonData!: CommonData;

  constructor(private productService:ProductService){
   // this.commonData = new CommonData();
   
  }
  ngOnInit(): void {
    /* this.productService.cartCount$.subscribe(count =>{
      this.cartValue = count;
      console.log("cart value",this.cartValue);
    }) */
  }

  getCount():void{
    //this.cartValue = this.commonData.getCartCount();
    //this.cartValue =  this.productService.getCartCount();
    //console.log('getCount',this.cartValue);
    //this.productService.cartCount$.subscribe(count => this.cartValue = count);
  }

  togaleTheme():void{
    if(this.currentTheme === 'primary'){
      this.currentTheme = 'purple';
      this.myClass ={
      'bg-primary':false,
      'bg-purple':true
    }
    }
    else{
      this.currentTheme = 'purple';
      this.myClass ={
      'bg-primary':true,
      'bg-purple':false
    }
    
  }
} 

toggleNavbar():void{
  this.showNavbar = !this.showNavbar;
}  
}
