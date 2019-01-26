import { Directive, AfterViewInit, ElementRef, Renderer2, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../shared.service';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[headerToggle]'
})
export class HeaderToggleDirective implements OnInit, AfterViewInit {
  didScroll;
  lastScrollTop = 0;
  delta = 5;
  hideInModules = ['admin', 'login', 'register'];
  visible = false;
  navbarHeight = 70;
  constructor(
    private router: Router,
    private sharedService: SharedService,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private renderer: Renderer2,
    private elementRef: ElementRef
    ) { }
  ngOnInit() {
    this.show();

   this.listenToRouteChange();
  // this.listenToHeaderToggle();
  }
  ngAfterViewInit() {
    setInterval(function() {
      if (this.didScroll) {
       //   this.hasScrolled();
          this.didScroll = false;
      }
  }, 250);
    this.listenToScrollChange();
  }
 hasScrolled() {
  const el: HTMLElement = document.getElementById('content-wrapper');
    const st = el.scrollTop;
    console.log('st', st)
    // Make sure they scroll more than delta
    if (Math.abs(this.lastScrollTop - st) <= this.delta) {
      return;
    }
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > this.lastScrollTop && st > this.navbarHeight) {
        // Scroll Down
        this.renderer.removeClass(this.elementRef.nativeElement, 'nav-down');
        this.renderer.addClass(this.elementRef.nativeElement, 'nav-up');
       // $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + window.outerHeight < document.body.scrollHeight) {
          this.renderer.removeClass(this.elementRef.nativeElement, 'nav-up');
        this.renderer.addClass(this.elementRef.nativeElement, 'nav-down');
        //    $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    this.lastScrollTop = st;
}
  listenToScrollChange() {
    const el = document.getElementById('landing-page-wrapper');
    fromEvent(el, 'scroll').subscribe(res => {
      this.didScroll = true;
    });
  }
  listenToHeaderToggle() {
  this.sharedService.toggleHeader.subscribe(res => this.handleToggleChange(res));
  }
  handleToggleChange(show: boolean) {
    console.log(show)
    if (!show) {
      this.hide();
    } else {
      this.show();
    }
  }
  listenToRouteChange() {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        /** Check to show or hide */
        const splittedUrls = res.url.split('/');
        const hidden = this.hideInModules.some((mod) => {
         return  splittedUrls.includes(`${mod}`);
        });
        if (hidden) {
          this.hide();
          return;
        } else {
          this.show();
        }
      }
    });
  }
  hide() {
  if (this.visible) {
    this.viewContainer.clear();
    this.visible = false;
  }
  }
  show() {
  //  console.log('show')
//  if (this.visible) {return; }
//   this.viewContainer.createEmbeddedView(this.templateRef);
//   this.visible = true;
  }

}
