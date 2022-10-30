import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
topNews:any;
  constructor(private service:NewsApiService) { }

  ngOnInit(): void {

    this.service.newsApi().subscribe((result)=>{
      console.log(result);
      this.topNews=result.articles;
      
    })
  }

  

}
