import { SharedService } from 'src/app/shared/shared.service';
import { Component, OnInit, ViewChild, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavStyleChangeDirective } from 'src/app/shared/directives/nav-style-change.directive';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getHeaderPopupState } from 'src/app/shared/store/ui.selectors';
import { switchToView } from 'src/app/app.utils';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
//  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit, DoCheck {
  @ViewChild(NavStyleChangeDirective) navStyleChangeRef: NavStyleChangeDirective;
    state = 'category';
    globalNavActive: boolean;
    headerPopupState: Observable<boolean>;
  constructor(private store: Store<AppState>, private sharedSerivce: SharedService, private changeDetector: ChangeDetectorRef) {
    this.headerPopupState =  this.store.select(getHeaderPopupState);
  }

  ngOnInit() {
    this.listenToNavChange();
  }
  ngDoCheck() {
   // console.log('Do Check in LP')
  }
  listenToNavChange() {
    this.sharedSerivce.globalNavState$.subscribe(res => {
      this.state = res;
      this.changeDetector.markForCheck();
      switchToView('#global-nav');
    });
  }
  onNavChange(link: string) {
    this.state = link;
   switchToView('#global-nav');
   this.globalNavActive = true;
  }


toggleGlobalNav() {
  if (!this.globalNavActive) {
    const nav = document.querySelector('#global-nav');
      if (nav) { nav.scrollIntoView(
        {behavior: 'smooth', block: 'start', inline: 'nearest'}
        ); }
  } else {
    const desktop = document.querySelector('#home-wrapper');
    if (desktop) { desktop.scrollIntoView(
      {behavior: 'smooth', block: 'start', inline: 'nearest'}
      ); }
  }
  this.globalNavActive = !this.globalNavActive;
}

}
