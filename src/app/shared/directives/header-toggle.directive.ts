import { Directive, AfterViewInit, ElementRef, Renderer2, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../shared.service';

@Directive({
  selector: '[headerToggle]'
})
export class HeaderToggleDirective implements OnInit {
  hideInModules = ['admin', 'login', 'register'];
  active = false;
  constructor(
    private element: ElementRef,
    private router: Router,
    private renderer: Renderer2,
    private sharedService: SharedService,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    ) { }
  ngOnInit() {
    console.log('on init')
   this.listenToRouteChange();
   this.listenToScrollToggle();
  }
  listenToScrollToggle() {
  this.sharedService.toggleHeader.subscribe(res => this.handleScrollChange(res));
  }
  handleScrollChange(res) {
    if (res.scrollTop > 0) {
      this.hide();
    } else {
      this.show();
    }
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
  //  this.renderer.addClass(this.element.nativeElement, 'animated zoomOut');
  if (this.active) {
    this.viewContainer.clear();
    this.active = false;
    const root = document.documentElement;
      root.style.setProperty('--kg-header-height', '0px');
  }
//    this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
  }
  show() {
 //  this.renderer.setStyle(this.element.nativeElement, 'display', 'block');
 if (this.active) {return; }
  this.viewContainer.createEmbeddedView(this.templateRef);
  this.active = true;
  const root = document.documentElement;
  root.style.setProperty('--kg-header-height', '4.3rem');
  }

}
