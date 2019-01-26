import { SharedService } from 'src/app/shared/shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavStyleChangeDirective } from 'src/app/shared/directives/nav-style-change.directive';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @ViewChild(NavStyleChangeDirective) navStyleChangeRef: NavStyleChangeDirective;
    state = 'category';
    globalNavActive: boolean;
  constructor(private sharedService: SharedService) {   }

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
