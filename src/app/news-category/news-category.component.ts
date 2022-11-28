import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.scss']
})
export class NewsCategoryComponent implements OnInit {

  constructor(private newsCategoryService: NewsService) { }
  newsCatData: any = [];

  ngOnInit(): void {
    this.newsCategoryService.getCategory('sports').subscribe((res) => {
      console.log(res);
      this.newsCatData = res.results;
    });
  }


}
