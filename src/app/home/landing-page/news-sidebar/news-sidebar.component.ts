import { slideInNews } from './../../../animations';
import { Component, OnInit } from '@angular/core';
import { trigger,  useAnimation, transition } from '@angular/animations';
import { NewsItem } from 'src/app/news/models/news-item.model';
import { NewsQuery } from 'src/app/news/models/news-query.model';
import { SharedService } from 'src/app/shared/shared.service';
import { interval } from 'rxjs';

@Component({
  selector: 'news-sidebar',
  templateUrl: './news-sidebar.component.html',
  styleUrls: ['./news-sidebar.component.scss'],
  animations: [
    trigger('slideInNews', [ transition('* => *',  useAnimation(slideInNews))])
  ],
})
export class NewsSidebarComponent implements OnInit {
  startIndex = 7;
  endIndex = 10;
  items: NewsItem[];
  visibleItems: NewsItem[];
  rowCount: number;
  stateChange: number;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getNews();
   //   this.sharedService.replaceSvgWitInline();
    }, 3000);
    this.initAutoSlide();
  }
  initAutoSlide() {
    interval(1000).subscribe(res => {
    });
  }
  changeNewsState() {
    this.stateChange = Math.random();
    this.visibleItems = [];
    setTimeout(() => this.visibleItems = this.items.filter((item, i) => i + 1 > this.startIndex && i + 1 <= this.endIndex), 0)
  }
  onPrev() {
    if (this.startIndex === 0) {return; }
    this.startIndex -= 3;
    this.endIndex -= 3;
    this.changeNewsState();
  }
  onNext() {
    if (this.endIndex ===  this.rowCount) {return; }
    this.startIndex += 3;
    this.endIndex += 3;
    this.changeNewsState();
  }
  getNews(query = new NewsQuery()) {
    this.items = [];
    const body = {
      kv: {
        startLimit: 0,
        endLimit: 10,
        ...query
      }
    };
   this.sharedService.getTableData(`api/get/Permission/Sharing/GetNewsForCommon`, body)
   .subscribe(res => {
    if (!res && res.tbl && res.tbl[0]) {return; }
     const items = res.tbl[0].r;
    // this.items = items.slice(0, 6)
     this.items = items;
     this.rowCount = res.tbl[0].rowCount;
     this.endIndex = this.rowCount;
     this.startIndex = this.rowCount - 3;
   this.changeNewsState();

    });
  }


}
