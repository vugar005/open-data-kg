import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationRoutes } from './organization.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputModule } from 'ngx-input';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    InputModule,
    SharedModule,
    OrganizationRoutes
  ],
  declarations: [OrganizationsComponent]
})
export class OrganizationsModule { }
