import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../book-list/Book';


/**
 *@doc Maneja la logica del carrito
 * 
 */

@Injectable({
  providedIn: 'root'
})


export class BookCartService {

  private _cartList: Book []=[];
  cartList: BehaviorSubject <Book[]>=new BehaviorSubject (this._cartList);

  constructor() {}

  addToCart (book:Book){
    let item = this._cartList.find(bk => bk.title==book.title);

    if (!item) {
      this._cartList.push({...book}); //clona el objeto 
    } else {
      item.quantity+=book.quantity;
    }

     //decis al behavior que hay un cambio en la variable
    this.cartList.next(this._cartList);



  }
  
  

}
