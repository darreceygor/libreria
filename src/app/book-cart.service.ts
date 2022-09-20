import { Injectable } from '@angular/core';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})
export class BookCartService {

  addToCart (book:Book){
    throw new Error ('Metodo no implementado');
  }
  constructor() { }
}
