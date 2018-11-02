import { Directive, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[headerToggle]'
})
export class HeaderToggleDirective implements AfterViewInit {

  hideInModules = ['admin'];
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
        /** Hide in Admin page */
        const splittedUrls = res.url.split('/');
        const isAdmin = this.hideInModules.some((mod) => {
         return  splittedUrls.includes(`${mod}`);
        });
        if (isAdmin) {
          this.hide();
          return;
        } else {
          this.show();
        }
      }
    });
  }
  hide() {
    this.renderer.addClass(this.element.nativeElement, 'd-none');
  }
  show() {
   this.renderer.removeClass(this.element.nativeElement, 'd-none');
  }

}
