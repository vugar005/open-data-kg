import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutes } from './admin-panel.routing';
import { SharedModule } from './shared/shared.module';
import { LeftAsideComponent } from './left-aside/left-aside.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutes,
    SharedModule,
  ],
  declarations: [
    AdminPanelComponent,
    LeftAsideComponent,
  ]
})
export class AdminPanelModule { }
