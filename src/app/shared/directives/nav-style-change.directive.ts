import { Directive, ElementRef, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Directive({
  selector: '[navStyleChange]'
})
export class NavStyleChangeDirective implements AfterViewInit, OnDestroy {
  mainModules = ['news', 'announcements', 'blogs', ''];
  hideInModules = ['login', 'register', 'admin'];
  _onDestroy$ = new Subject<void>();
  constructor(
    private element: ElementRef,
    private router: Router,
    private renderer: Renderer2
    ) { }
  ngAfterViewInit() {
    console.log('de')
   // this.listenToScrollChange();
 //  this.listenToRouteChange();
  }
  listenToRouteChange() {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        /** Hide in Login page */
        const isAuth = this.hideInModules.some((mod) => `/${mod}` === res.url);
        if (isAuth) {
          // this.hide();
          return;
        }
         /** Pin to bottom if landing page */
        const isMain = this.mainModules.some((mod) => `/${mod}` === res.url);
        if (isMain) {
          this.pinBottom();
        } else {
          this.pinTop();
        }
      }
    });
  }
  listenToScrollChange() {
    fromEvent(document, 'wheel')
    .pipe(
      takeUntil(this._onDestroy$),
    ).subscribe((res: WheelEvent) => this.handleScrollEvent(res), (er) => console.log(er));
  }
  handleScrollEvent(e: WheelEvent) {
   console.log(e);
  }
  ngOnDestroy() {
    this._onDestroy$.next();
  }
  pinTop() {
    this.renderer.removeClass(this.element.nativeElement, 'bottom');
    this.renderer.addClass(this.element.nativeElement, 'top');
  }
  pinBottom() {
    this.renderer.removeClass(this.element.nativeElement, 'top');
    this.renderer.addClass(this.element.nativeElement, 'bottom');
  }
  // hide() {
  //   this.renderer.removeClass(this.element.nativeElement, 'top');
  //   this.renderer.removeClass(this.element.nativeElement, 'bottom');
  // }
}
