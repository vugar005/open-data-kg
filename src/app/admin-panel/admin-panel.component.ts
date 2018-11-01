import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { ChangeHeaderClass } from '../shared/store/ui.actions';
import { Observable } from 'rxjs';
import { getUserModules } from '../auth/store/auth.selectors';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit, OnDestroy {
 modules: any;
  constructor(private store: Store<AppState>, private router: Router) {
    store.dispatch(new ChangeHeaderClass('hide'));
   }

  ngOnInit() {
    this.store.select(getUserModules).subscribe(modules => {
      this.modules = modules;
      this.navigateToFirstModule();
    });
  }
  ngOnDestroy() {
    this.store.dispatch(new ChangeHeaderClass(''));
  }
  navigateToFirstModule() {
    if (!(this.modules && this.modules.length > 0)) {return; }
    console.log(this.router);
    const paths = this.router.url.split('/');
    console.log(paths);
    console.log(paths.length);
    if (paths.length <= 2) {
      this.router.navigate([`/admin/${this.modules[0].url}`]);
    }
  }
}
