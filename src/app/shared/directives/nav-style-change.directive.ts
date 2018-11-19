import { Directive, ElementRef, AfterViewInit, Renderer2, OnDestroy, HostBinding, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Directive({
  selector: '[navStyleChange]',
  exportAs: 'navStyleChange'
})
export class NavStyleChangeDirective implements AfterViewInit, OnDestroy {
  mainModules = ['news', 'announcements', 'blogs', ''];
  hideInModules = ['login', 'register', 'admin'];
  _onDestroy$ = new Subject<void>();
 // @HostBinding('class') @Input() classList = 'modules';
   active = false;
  constructor(
    private element: ElementRef,
    private router: Router,
    private renderer: Renderer2
    ) { }
    ngAfterViewInit() {
      // this.listenToModuleClick();
    }
    listenToModuleClick() {
    //  const modules = document.getElementsByClassName('global-module');
    //  Array.from(modules).forEach(mod => {
    //   mod.addEventListener('click', this.pinTop.bind(this));
    //  });
     fromEvent(document, 'click')
     .pipe(
       tap((e: Event) => {
        let clickedComponent: any = e.target;
        const mouseComponent = document.getElementsByClassName('scroll-btn');
        console.log(mouseComponent)
        console.log(e.target)
      do {
        if (clickedComponent === this.element.nativeElement) {
          if (clickedComponent === mouseComponent) {
            this.active = !this.active;
            console.log('1');
            break;
          }
            this.active = true;
            break;
        }  else {
          clickedComponent = clickedComponent.parentNode;
          console.log('3')
         // this.active = false;
        }
      } while (clickedComponent);
      if (!clickedComponent) {
         this.active = false;
      }
    //  console.log(this.active)
 //     this.toggleClass(this.active);
        })
     ).subscribe();
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
  toggleBlockClass(e: MouseEvent) {
    e.preventDefault();
    if (this.active) {
      this.pinBottom();
    } else {
       this.pinTop();
    }
  }
  pinTop() {
    this.active = true;
  //  console.log('top called')
    this.renderer.addClass(this.element.nativeElement, 'top');
  }
  pinBottom() {
    this.active = false;
  //  console.log('bottom called')
    this.renderer.removeClass(this.element.nativeElement, 'top');
  }
  // hide() {
  //   this.renderer.removeClass(this.element.nativeElement, 'top');
  //   this.renderer.removeClass(this.element.nativeElement, 'bottom');
  // }
}
