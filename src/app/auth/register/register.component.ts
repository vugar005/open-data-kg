import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { ChangeHeaderClass } from '../../shared/store/ui.actions';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy, AfterViewInit {
  typed: any;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new ChangeHeaderClass('hide'));
  }
  ngOnDestroy() {
    this.store.dispatch(new ChangeHeaderClass(''));
  }
  ngAfterViewInit() {
  }

}
