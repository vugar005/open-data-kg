import { Directive, OnDestroy, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as _ from 'lodash';
import { getUserModules } from 'src/app/auth/store/auth.selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { UserModule } from 'src/app/auth/models/user.model.';
@Directive({
  selector:"[rbacAllow]"
})
export class RbacAllowDirective implements OnDestroy {
  @Input()
  set rbacAllow(allowedRole) {
      this.allowedRole = allowedRole;
      this.showIfUserAllowed();
  }
  allowedRole = [];
  priviliges: UserModule[];
  _onDestroy$ = new Subject<void>();
  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef,
      private store: Store<AppState>) {
       store.select(getUserModules)
       .pipe(takeUntil(this._onDestroy$))
       .subscribe(res => {
          this.priviliges = res;
        this.showIfUserAllowed();
       });
  }

  ngOnDestroy() {
      this._onDestroy$.next();
  }

  showIfUserAllowed() {
      if ((!this.allowedRole) || (!this.priviliges)) {
          this.viewContainer.clear();
          return;
      }

     //  let  isUserAllowed;
       const module =  this.priviliges.find(mod => mod.id === this.allowedRole[0]);
       if (!(module && module.operations)) {
         return;
       }
       const isAllowed = module.operations.find(op => op.code === this.allowedRole[1]);
       if (isAllowed) {
         this.viewContainer.createEmbeddedView(this.templateRef);
       } else {
        this.viewContainer.clear();
       }
        // if (!modePriviliges =) {}
           // _.intersection(this.allowedRole, this.priviliges).length > 0;

  }

}
