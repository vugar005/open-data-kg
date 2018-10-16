import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { ChangeHeaderClass } from '../shared/store/ui.actions';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit, OnDestroy {

  constructor(private store: Store<AppState>) {
    store.dispatch(new ChangeHeaderClass('hide'));
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.store.dispatch(new ChangeHeaderClass(''));
  }

}
