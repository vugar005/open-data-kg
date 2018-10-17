import { Component, OnInit, ChangeDetectionStrategy, DoCheck, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInRight } from 'ng-animate';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'announcement-item',
  templateUrl: './announcement-item.component.html',
  styleUrls: ['./announcement-item.component.scss'],
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
export class AnnouncementItemComponent implements OnInit, DoCheck, OnDestroy {
  @Input()
  item: any;
  @Input()
  index: number;
  fadeInRight = fadeInRight;
  ready: boolean;
  _onDestroy$ = new Subject<void>();
  faChevronRight = faChevronRight;
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
