import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _news:HttpClient) { }

  //newsUrl='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d1b5d7612914403f947b778d5ee73529';
  newsUrl='https://www.cultura.gob.ar/api/v2.0/convocatorias/'


viewNews():Observable<any>{
  return this._news.get(this.newsUrl);
}
}
