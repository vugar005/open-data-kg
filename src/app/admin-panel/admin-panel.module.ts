import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutes } from './admin-panel.routing';
import { LeftAsideComponent } from './left-aside/left-aside.component';
import { SharedModule } from '../shared/shared.module';
import { RightAsideComponent } from './right-aside/right-aside.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminPanelRoutes
  ],
  declarations: [
    AdminPanelComponent,
    LeftAsideComponent,
    RightAsideComponent
  ]
})
export class AdminPanelModule { }
