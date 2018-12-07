import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { getUserModules } from '../auth/store/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit, OnDestroy {
 modules: any;
 showPopup = false;
  constructor(private store: Store<AppState>, private router: Router) {
   }

  ngOnInit() {
    this.store.select(getUserModules).subscribe(modules => {
      this.modules = modules;
      this.navigateToFirstModule();
    });
  }
  ngOnDestroy() {
  }
  navigateToFirstModule() {
    if (!(this.modules && this.modules.length > 0)) {return; }
    const paths = this.router.url.split('/');
    if (paths.length <= 2) {
      console.log('admin root')
      this.router.navigate([`/admin/${this.modules[0].url}`]);
    }
  }
}
