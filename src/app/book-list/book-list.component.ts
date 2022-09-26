import { Component, OnInit } from '@angular/core';
import { BookCartService } from '../services/book-cart.service';
import { BookDataService } from '../services/book-data.service';
import { Book } from './Book';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {

  books:Book []= [];
    
  constructor(
    private cart: BookCartService,
    private bookDataService: BookDataService) { 
  }
  
  ngOnInit(): void {
    this.bookDataService.getAll()
      .subscribe(books => this.books = books);
  }


  addToCart (book: Book): void {
    this.cart.addToCart(book);
    book.stock = book.stock-book.quantity;
    book.quantity=0;
  }

  maxReached (m: string){
    alert (m);
  }

}
