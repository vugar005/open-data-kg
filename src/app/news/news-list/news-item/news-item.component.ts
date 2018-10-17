import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInRight} from 'ng-animate';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  animations: [
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight, {
      params: { timing: 0.2, delay: 0 }
    }))])
  ],
})
export class NewsItemComponent implements OnInit, DoCheck {
  @Input() news: any;
  @Input() index: number;
  fadeInRight = fadeInRight;
  ready: boolean;
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.ready = true;
    //  this.changeDetectorRef.detectChanges();
    }, this.index * 100);
  }
  ngDoCheck() {
  //  console.log('checking')
  }

}
