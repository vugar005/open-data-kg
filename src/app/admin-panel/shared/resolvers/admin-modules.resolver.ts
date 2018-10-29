import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import {map} from 'rxjs/operators';
import { AdminPanelService } from '../../admin-panel.service';
@Injectable()
export class AdminModulesResolver {
  constructor(
    private adminService: AdminPanelService,
    private router: Router
  ) {}
  resolve(
          route: ActivatedRoute,
          state: RouterStateSnapshot): Observable<any> | Promise<any> {
    return this.adminService.modules.length > 0 ? of(this.adminService.modules) : this.adminService.getModuleList()
      .pipe(
      map((modules: any) => {
        console.log(modules);
        const currentUrl = state.url;
        if  (currentUrl === '/admin') {
          console.log('home');
          (modules[0]) ? (this.router.navigate([`/admin/${modules[0].name}`])) : console.log('no modules');
        }
      })
      );
  }
}
