import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInRight } from 'ng-animate';
import { timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NewsItem } from '../../models/news-item.model';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  animations: [
    trigger('fadeInRight', [
      transition(
        '* => *',
        useAnimation(fadeInRight, {
          params: { timing: 0.2, delay: 0 }
        })
      )
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsItemComponent implements OnInit, DoCheck, OnDestroy {
  @Input()
  news: NewsItem;
  @Input()
  index: number;
  fadeInRight = fadeInRight;
  ready: boolean;
  _onDestroy$ = new Subject<void>();
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.initAnimation();
  }
  ngDoCheck() {
    //  console.log('checking')
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }
  initAnimation() {
    timer(this.index * 100)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(res => {
        this.ready = true;
        this.changeDetectorRef.detectChanges();
      });
  }
}
