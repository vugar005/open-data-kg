import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MockText } from './mock-text';
import { SharedService } from 'src/app/shared/shared.service';
import { NewsItem } from '../../models/news-item.model';

@Component({
  selector: 'news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  mockText = MockText;
  newsItem: NewsItem;
  otherItems: NewsItem[];
  constructor(private sharedService: SharedService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getNewsDetail();
  }
  getNewsDetail() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        const body = {
          kv: {
            id: id
          }
        };
        this.sharedService.getTableData('api/get/Permission/Sharing/GetNewsForCommon', body)
        .subscribe(res => {
          this.newsItem = res && res.r[0];
          this.getNewsByCategory();
        });
      }
    });
  }
  getNewsByCategory() {
    const body = {
      kv: {
        startLimit: 0,
        endLimit: 3
      }
    };
    this.sharedService.getTableData('api/get/Permission/Sharing/GetNewsForCommon', body)
    .subscribe(res => {
      this.otherItems = res.r;
    });
  }

}
