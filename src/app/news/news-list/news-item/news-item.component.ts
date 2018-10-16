import { Component, OnInit, Input } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounceInRight} from 'ng-animate';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  animations: [
    trigger('bounceInRight', [transition('* => *', useAnimation(bounceInRight, {
      params: { timing: 2.5, delay: 0 }
    }))])
  ]
})
export class NewsItemComponent implements OnInit {
  @Input() news: any;
  bounceInRight = bounceInRight;
  constructor() { }

  ngOnInit() {
  }

}
