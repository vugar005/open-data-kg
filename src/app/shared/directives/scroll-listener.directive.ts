import { Directive, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[scrollListener]'
})
export class ScrollListenerDirective implements AfterViewInit {
 @Output() scrollChange = new EventEmitter();
  constructor(private element: ElementRef) { }
  ngAfterViewInit() {
   this.listenToScrollChange();
  }
  listenToScrollChange() {
    const el = document.getElementsByClassName('content-wrapper')[0];
    fromEvent(el, 'scroll')
    .pipe(
    ).subscribe((res) => this.handleScrollEvent(res), (er) => console.log(er));
  }
  handleScrollEvent(e: any) {
 //   console.log(e);
    this.scrollChange.emit(e.target);
  }

}
