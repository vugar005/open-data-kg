import { concat } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInRight, slideInLeft, slideOutRight } from 'ng-animate';
import { NewsItem } from 'src/app/news/models/news-item.model';
import { NewsQuery } from 'src/app/news/models/news-query.model';
import { SharedService } from 'src/app/shared/shared.service';
import { interval } from 'rxjs';

@Component({
  selector: 'news-sidebar',
  templateUrl: './news-sidebar.component.html',
  styleUrls: ['./news-sidebar.component.scss'],
  animations: [
    trigger('slideOutRight', [transition(':leave', useAnimation(slideOutRight, { params: { timing: 0.500, delay: 0 }}))])
  ],
})
export class NewsSidebarComponent implements OnInit {
  render = false;
  startIndex = 7;
  endIndex = 10;
  slideOutRight = true;
  items: NewsItem[];
  rowCount: number;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    setTimeout(() => {
      this.render = true;
      this.getNews();
    }, 2000);
    this.initAutoSlide();
  }
  initAutoSlide() {
  interval(1000).subscribe(res => {
  //  if (this.s) {}
  });
  }
  onPrev() {
    if (this.startIndex === 0) {return; }
    this.startIndex -= 1;
    this.endIndex -= 1;
  }
  onNext() {
    if (this.endIndex ===  this.rowCount) {return; }
    this.startIndex += 1;
    this.endIndex += 1;
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
     this.items = res.tbl[0].r;
     this.rowCount = res.tbl[0].rowCount;
     this.endIndex = this.rowCount;
     this.startIndex = this.rowCount - 3;
    });
  }


}
