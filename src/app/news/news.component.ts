import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {NewsService} from '../services/news.service';
=======
import { NewsService } from '../services/news.service';
>>>>>>> 05533178a5601c59ac433bbba0484b764b81756f

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
