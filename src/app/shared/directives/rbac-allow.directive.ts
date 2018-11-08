import { Directive, OnDestroy, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
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
  set rbacAllow(allowedRole: {moduleCode: string, opCode: string}) {
      this.allowedRole = allowedRole;
      this.showIfUserAllowed();
  }
  allowedRole: {moduleCode: string, opCode: string};
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
        console.log(res);
        this.showIfUserAllowed();
       });
  }

  ngOnDestroy() {
      this._onDestroy$.next();
  }

  showIfUserAllowed() {

      if ((!this.allowedRole) || (!this.priviliges) ) {
          this.viewContainer.clear();
          return;
      }

     //  let  isUserAllowed;
       const modePriviliges =  this.priviliges.find(mod => mod.code === this.allowedRole.moduleCode);
        // if (!modePriviliges =) {}
           // _.intersection(this.allowedRole, this.priviliges).length > 0;


      // if (isUserAllowed) {
      //     this.viewContainer.createEmbeddedView(this.templateRef);
      // } else {
      //     this.viewContainer.clear();
      // }

  }

}
