import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { BookCartService } from '../book-cart.service';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList!: Book[];

  constructor(private cart:BookCartService) {
    cart.cartList.subscribe(observable => this.cartList=observable);
  }

  ngOnInit(): void {
  }

}
