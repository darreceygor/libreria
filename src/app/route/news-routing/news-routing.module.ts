import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingRoutingModule } from './news-routing-routing.module';
import { BabiloniaNewsComponent } from 'src/app/babilonia-news/babilonia-news.component';
import { Routes } from '@angular/router';
import { NewsComponent } from 'src/app/news/news.component';
import { NewsCategoryComponent } from 'src/app/news-category/news-category.component';


const newsRoutes: Routes = [
  { path: '',redirectTo: 'books',pathMatch: 'full' },
  { path: './news/latest', component: NewsComponent },
  { path: './news/business', component: NewsCategoryComponent },
 ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewsRoutingRoutingModule
  ]
})
export class NewsRoutingModule { }
