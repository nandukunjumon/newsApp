import { Component, OnInit } from '@angular/core';
import{NewsApiService} from '../news-api.service'
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
techDisplay:any;
  constructor(private service:NewsApiService) { }

  ngOnInit(): void {
    this.service.techNews().subscribe((result)=>{
      this.techDisplay=result.articles;
    })
  }

}
