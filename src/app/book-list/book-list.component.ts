import { Component, OnInit } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import {Book} from './Book'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {

  books:Book []= [
    {
    image:"assets/img/absalom.jpg", 
    title:"Absalom, absalom",
    autor:"William Faulkner",
    price:123,
    stock:5,
    clearance:false,
    quantity:0,
    },
    {
      image:"assets/img/anakarenina.jpg", 
      title:"Ana Karenina",
      autor:"---",
      price:254,
      stock:8,
      clearance:true,
      quantity:0,
      },
    {
      image:"assets/img/1984.jpg", 
      title:"1984 Primera Edicion",
      autor:"George Orwell",
      price:204,
      stock:0,
      clearance:false,
      quantity:0,
    },
    { image:"assets/img/1984.jpg", 
      title:"1984 Segunda Edicion",
      autor:"George Orwell",
      price:204,
      stock:18,
      clearance:false,
      quantity:0,
    },
        { image:"assets/img/1984.jpg", 
      title:"1984 Segunda Edicion",
      autor:"George Orwell",
      price:204,
      stock:0,
      clearance:false,
      quantity:0,
    },
];
    
  constructor(private cart: BookCartService) { 
  }
  
  ngOnInit(): void {
  }


  addToCart (book: any): void {
    this.cart.addToCart(book);
  }


  maxReached (m: string){
    alert (m);
  }

}
