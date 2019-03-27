import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NewsItem } from 'src/app/news/models/news-item.model';

@Component({
  selector: 'news-sidebar-item',
  templateUrl: './news-sidebar-item.component.html',
  styleUrls: ['./news-sidebar-item.component.scss'],
})
export class NewsSidebarItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input() item: NewsItem;
  @Input()
  index: number;
  _onDestroy$ = new Subject<void>();
  ready = true;
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.initAnimation();
  }
  ngOnChanges() {
  }
  change() {
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }
  initAnimation() {
    this.ready = true;
    // timer(550)
    //   .pipe(takeUntil(this._onDestroy$))
    //   .subscribe(res => {
    //     this.ready = true;
    //     this.changeDetectorRef.detectChanges();
    //   });
  }

}
