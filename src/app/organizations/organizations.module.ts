import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationRoutes } from './organization.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputModule } from 'ngx-input';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from '../shared/interceptors/api.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    InputModule,
    SharedModule,
    OrganizationRoutes
  ],
  declarations: [OrganizationsComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true}
  ]
})
export class OrganizationsModule { }
