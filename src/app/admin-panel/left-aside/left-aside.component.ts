import { User, UserOrg } from './../../auth/models/user.model.';
import { Component, OnInit } from '@angular/core';
import {faAccusoft} from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';
import { AdminPanelService } from '../admin-panel.service';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { getUserModules, getUserOrg } from 'src/app/auth/store/auth.selectors';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'left-aside',
  templateUrl: './left-aside.component.html',
  styleUrls: ['./left-aside.component.scss']
})
export class LeftAsideComponent implements OnInit {
  faAccusoft = faAccusoft;
  structureName$: Observable<string>;
  structureImgUrl$: Observable<string>;
  hostname: string;
  token$: Observable<string>;
  modules: any;
  userOrg$: Observable<UserOrg>;
  constructor(private adminService: AdminPanelService,
     private store: Store<AppState>,
     private router: Router,
     private route: ActivatedRoute) {
       this.userOrg$ = this.store.select(getUserOrg);
   }

  ngOnInit() {
    this.store.select(getUserModules).subscribe(modules => {
      this.modules = modules;
    });
  }
  onNavigate(module) {

  }
  navigateToFirstModule() {
    if (!(this.modules && this.modules.length > 0)) {return; }
    const paths = this.router.url.split('/');
    if (paths.length <= 2) {
      this.router.navigate([`/admin/${this.modules[0].url}`]);
    }
  }

}
