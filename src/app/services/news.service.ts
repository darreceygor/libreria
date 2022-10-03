import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private _news: HttpClient) {}

  //newsUrl='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d1b5d7612914403f947b778d5ee73529';

  newsUrl =
    'https://newsdata.io/api/1/news?apikey=pub_1190361dbbbeb1e6ec553b4a055a533229307&language=es&country=ar&category=technology,entertainment';

  viewNews(): Observable<any> {
    return this._news.get(this.newsUrl);
  }
}
