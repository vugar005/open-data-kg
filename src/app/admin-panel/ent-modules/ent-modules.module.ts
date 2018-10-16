import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntModulesComponent } from './ent-modules.component';
import { EntModulesRoutes } from './ent-modules.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { NtTableModule } from 'nt-table';

@NgModule({
  imports: [
    CommonModule,
    EntModulesRoutes,
    SharedModule,
    NtTableModule
  ],
  declarations: [EntModulesComponent]
})
export class EntModulesModule { }
