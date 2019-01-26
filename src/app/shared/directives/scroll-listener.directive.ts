import { Directive, ElementRef, AfterViewInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {  Subject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[scrollListener]'
})
export class ScrollListenerDirective implements AfterViewInit, OnDestroy {
 @Output() scrollChange = new EventEmitter();
 @Output() wheelChange = new EventEmitter<WheelEvent>();
 _onDestroy$ = new Subject<void>();
  constructor(private element: ElementRef) { }
  ngAfterViewInit() {
   this.listenToScrollChange();
   this.listenToWheelChange();
  }
  listenToScrollChange() {
    const el = document.getElementsByClassName('content-wrapper')[0];
    fromEvent(el, 'scroll')
    .pipe(
    ).subscribe((res) => this.handleScrollEvent(res), (er) => console.log(er));
  }
  listenToWheelChange() {
    fromEvent(document, 'mousewheel')
    .pipe(
      takeUntil(this._onDestroy$),
    ).subscribe((res: WheelEvent) => this.handleMouseEvent(res), (er) => console.log(er));
  }
  handleScrollEvent(e: any) {
    this.scrollChange.emit(e.target);
  }
  handleMouseEvent(e: any) {
   // this.wheelChange.emit(e);
  }
  ngOnDestroy() {}

}
