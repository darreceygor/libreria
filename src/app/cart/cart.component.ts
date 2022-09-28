import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Book } from '../book-list/Book';
import { BookCartService } from '../services/book-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList!: Book[];

  constructor(private cart:BookCartService) {
    cart.cartList.subscribe((observable: Book[]) => this.cartList=observable);
    console.log(this.cartList);
  }

  ngOnInit(): void {

  }

  total():number{
    let total=0

    for (let i in this.cartList) {
        total+=this.cartList[i].price*this.cartList[i].quantity;
    }
    return total;
  }
}
