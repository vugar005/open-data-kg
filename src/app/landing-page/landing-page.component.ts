import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import {  ChangeGlobalNavClass } from '../shared/store/ui.actions';
import { getGlobalNavClass } from '../shared/store/ui.selectors';
import { take } from 'rxjs/operators';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    store.select(getGlobalNavClass)
    .pipe(
      take(1)
    )
    .subscribe(res => {
      if (res !== 'bottom') {
        store.dispatch(new ChangeGlobalNavClass('bottom'));
      }
    });
   }

  ngOnInit() {
  }

}
