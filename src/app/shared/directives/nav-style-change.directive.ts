import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[navStyleChange]'
})
export class NavStyleChangeDirective implements AfterViewInit {
  mainModules = ['news', 'announcements', 'blogs', ''];
  hideInModules = ['login', 'register', 'admin'];
  constructor(
    private element: ElementRef,
    private router: Router,
    private renderer: Renderer2
    ) { }
  ngAfterViewInit() {
   this.listenToRouteChange();
  }
  listenToRouteChange() {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        const isAuth = this.hideInModules.some((mod) => `/${mod}` === res.url);
        if (isAuth) {
          this.hide();
          return;
        }
        const isMain =   this.mainModules.some((mod) => `/${mod}` === res.url);
        if ( isMain) {
          this.pinBottom();
        } else {
          this.pinTop();
        }
      }
    });
  }
  pinTop() {
    this.renderer.removeClass(this.element.nativeElement, 'bottom');
    this.renderer.addClass(this.element.nativeElement, 'top');
  }
  pinBottom() {
    this.renderer.removeClass(this.element.nativeElement, 'top');
    this.renderer.addClass(this.element.nativeElement, 'bottom');
  }
  hide() {
    this.renderer.removeClass(this.element.nativeElement, 'top');
    this.renderer.removeClass(this.element.nativeElement, 'bottom');
  }
}
