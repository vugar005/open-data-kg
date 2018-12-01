import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  config = {
      wheelSpeed: 0.2,
      minScrollbarLength: 20,
      swipeEasing: true
    };
    state = 'category';
  constructor(private store: Store<AppState>, private router: Router) {

   }

  ngOnInit() {
  }
  onClickOutside(e) {
    console.log(e);
  }
  onNavChange(link: string) {
    this.state = link;
 //  this.router.navigateByUrl(`${link}-overview`);
  }
onYStart(e) {
  console.log(e);
}
}
