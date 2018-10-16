import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { LeftAsideComponent } from './left-aside/left-aside.component';
import { AdminPanelRoutes } from './admin-panel.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutes
  ],
  declarations: [
    AdminPanelComponent,
    LeftAsideComponent
  ]
})
export class AdminPanelModule { }
