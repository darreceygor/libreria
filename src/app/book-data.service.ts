import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book-list/Book';


const URL = 'https://632cb14c519d17fb53b244ba.mockapi.io/books/books';

@Injectable({
  providedIn: 'root'
})

export class BookDataService {

  constructor(private http:HttpClient) { }

  public getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(URL); //tipar la devolucion del json
  }

}


//  mocakpi https://632cb14c519d17fb53b244ba.mockapi.io/books/:endpoint
