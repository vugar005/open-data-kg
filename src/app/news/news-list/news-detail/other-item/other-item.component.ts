import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from 'src/app/news/models/news-item.model';

@Component({
  selector: 'other-item',
  templateUrl: './other-item.component.html',
  styleUrls: ['./other-item.component.scss']
})
export class OtherItemComponent implements OnInit {
  @Input() item: NewsItem;
  constructor() { }

  ngOnInit() {
  }

}
