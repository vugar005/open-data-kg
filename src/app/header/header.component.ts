import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getGlobalNavClass } from '../shared/store/ui.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  globalNavClass$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.globalNavClass$ = store.select(getGlobalNavClass);
  }

  ngOnInit() {
  }

}
