import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck } from '@angular/core';
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
  ],
})
export class NewsItemComponent implements OnInit, DoCheck {
  @Input() news: any;
  @Input() index: number;
  bounceInRight = bounceInRight;
  ready: boolean;
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.ready = true;
    //  this.changeDetectorRef.detectChanges();
    }, this.index * 150);
  }
  ngDoCheck() {
  //  console.log('checking')
  }

}
