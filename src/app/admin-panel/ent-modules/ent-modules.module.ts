import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntModulesComponent } from './ent-modules.component';
import { EntModulesRoutes } from './ent-modules.routing';

@NgModule({
  imports: [
    CommonModule,
    EntModulesRoutes
  ],
  declarations: [EntModulesComponent]
})
export class EntModulesModule { }
