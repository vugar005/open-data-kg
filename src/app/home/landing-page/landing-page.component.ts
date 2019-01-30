import { SharedService } from 'src/app/shared/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavStyleChangeDirective } from 'src/app/shared/directives/nav-style-change.directive';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getHeaderPopupState } from 'src/app/shared/store/ui.selectors';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @ViewChild(NavStyleChangeDirective) navStyleChangeRef: NavStyleChangeDirective;
    state = 'category';
    globalNavActive: boolean;
    headerPopupState: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.headerPopupState =  this.store.select(getHeaderPopupState);
  }

  ngOnInit() {
  }
  onNavChange(link: string) {
    this.state = link;
   this.goToSection('#global-nav');
   this.globalNavActive = true;
  }
  goToSection(section: string) {
    const nav = document.querySelector(section);
    if (nav) { nav.scrollIntoView({
      behavior: 'smooth', block: 'start', inline: 'nearest'
    }); }
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
