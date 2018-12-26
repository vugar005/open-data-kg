import { NgModule } from '@angular/core';
import { RbacAllowDirective } from './directives/rbac-allow.directive';
import { ForLoggedInDirective } from './directives/forLoggedIn.directive';

@NgModule({
  declarations: [RbacAllowDirective, ForLoggedInDirective],
  exports: [RbacAllowDirective, ForLoggedInDirective]
})
export class SharedRbacModule {}

