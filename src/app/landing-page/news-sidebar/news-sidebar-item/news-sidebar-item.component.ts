import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideInRight } from 'ng-animate';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'news-sidebar-item',
  templateUrl: './news-sidebar-item.component.html',
  styleUrls: ['./news-sidebar-item.component.scss'],
  animations: [
    trigger('slideInRight', [transition(':enter', useAnimation(slideInRight, { params: { timing: 0.300, delay: 0 }}))]),
  ],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewsSidebarItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input() item;
  @Input()
  index: number;
  slideInRight = true;
  _onDestroy$ = new Subject<void>();
  ready = false;
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.initAnimation();
  }
  ngOnChanges() {
  }
  change() {
    this.slideInRight = !this.slideInRight;
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }
  initAnimation() {
    timer(550)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(res => {
        this.ready = true;
        this.changeDetectorRef.detectChanges();
      });
  }

}
