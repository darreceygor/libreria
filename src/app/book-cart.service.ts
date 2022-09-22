import { Injectable } from '@angular/core';
import { Book } from './book-list/Book';


/**
 *@doc Maneja la logica del carrito
 * 
 */

@Injectable({
  providedIn: 'root'
})


export class BookCartService {

  cartList: Book[]=[];

  constructor() { 
  }

  addToCart (book:Book){
    this.cartList.push(book);
  }
  
  

}
