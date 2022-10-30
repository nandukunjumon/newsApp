import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  // news api url
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=3f9c3b7dc2bb45ffa9a8246f893b8398";
techNewsUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=3f9c3b7dc2bb45ffa9a8246f893b8398";
buzNewsUrl="https://newsapi.org/v2/top-headlines?country=in&category=Business&apiKey=3f9c3b7dc2bb45ffa9a8246f893b8398";

  constructor(private http:HttpClient) { }

newsApi():Observable<any>{
  return this.http.get(this.newsApiUrl)
}
techNews():Observable<any>{
  return this.http.get(this.techNewsUrl)
}
buzNews():Observable<any>{
  return this.http.get(this.buzNewsUrl)
}


}
