import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { ChangeGlobalNavClass } from '../shared/store/ui.actions';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  //  store.dispatch(new ChangeGlobalNavClass('top'));
  }

  ngOnInit() {
  }

}
