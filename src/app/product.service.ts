import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, delay, of, throwError } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private cartCount = 0;
  cartCount$ = new Subject<number>();

 // count = of (10,20,30,45,68,69);

  constructor(private http:HttpClient) { 
    /* this.count.subscribe(val =>{
      console.log(val);
    }); */
  }

  incrementCartCount():void{
    this.cartCount++;
    this.cartCount$.next(this.cartCount);
  }

  decrementCartCount():void{
    this.cartCount--;
    this.cartCount$.next(this.cartCount);
  }

  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products')
    .pipe(
      delay(4000),
      catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    let errorMessage ='';
    if(error.status === 0){
      errorMessage =`some client side error : ${error}`;
    }
    else{
      errorMessage = `some server side error with status : ${error.status} and message: ${error.message}`
    }
    return throwError(()=>errorMessage);
  }
  
}
