import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BabiloniaAboutComponent } from './babilonia-about/babilonia-about.component';
import { BabiloniaBooksComponent } from './babilonia-books/babilonia-books.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { BabiloniaNewsComponent } from './babilonia-news/babilonia-news.component';
import { NewsCategoryComponent } from './news-category/news-category.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BabiloniaAboutComponent,
    BabiloniaBooksComponent,
    CartComponent,
    InputIntegerComponent,
    NewsComponent,
    ContactComponent,
    BabiloniaNewsComponent,
    NewsCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
