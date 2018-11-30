import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategorySidebarComponent } from './category-sidebar/category-sidebar.component';
import { CategoriesRoutes } from './categories.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {InputModule} from 'ngx-input';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from '../shared/interceptors/api.interceptor';
import { TokenInterceptor } from '../auth/token.inteceptor';
import { ErrorInterceptor } from '../shared/interceptors/error.interceptor';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutes,
    FontAwesomeModule,
    InputModule,
    SharedModule,
  ],
  declarations: [CategoriesComponent, CategoryListComponent, CategorySidebarComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ]
})
export class CategoriesModule { }
