import { NgModule } from '@angular/core';
import { RbacAllowDirective } from './directives/rbac-allow.directive';

@NgModule({
  declarations: [RbacAllowDirective],
  exports: [RbacAllowDirective]
})
export class SharedRbacModule {}

