import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy, AfterViewInit {
  typed: any;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  ngAfterViewInit() {
  }

}
