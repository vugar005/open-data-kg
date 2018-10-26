import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntOperationsComponent } from './ent-operations.component';
import { EntOperationsRoutes } from './ent-operations.routing';
import { SharedAdminModule } from '../shared/shared-admin.module';

@NgModule({
  imports: [
    CommonModule,
    EntOperationsRoutes,
    SharedAdminModule
  ],
  declarations: [EntOperationsComponent]
})
export class EntOperationsModule { }
