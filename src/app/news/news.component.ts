import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  //display data
  newsData: any = [];

  ngOnInit(): void {
    this.newsService.viewNews().subscribe((res) => {
      console.log(res);
      this.newsData = res.results;
    });
  }
}
