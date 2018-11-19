import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';

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
  constructor(private store: Store<AppState>) {

   }

  ngOnInit() {
  }
  onClickOutside(e) {
    console.log(e)
  }
onYStart(e) {
  console.log(e)
}
}
