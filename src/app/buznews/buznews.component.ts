import { Component, OnInit } from '@angular/core';
import{NewsApiService} from '../news-api.service'
@Component({
  selector: 'app-buznews',
  templateUrl: './buznews.component.html',
  styleUrls: ['./buznews.component.css']
})
export class BuznewsComponent implements OnInit {
buzDisplay:any;
  constructor(private service:NewsApiService) { }

  ngOnInit(): void {
    this.service.buzNews().subscribe((result)=>{
      this.buzDisplay=result.articles;
    })
  }

}
