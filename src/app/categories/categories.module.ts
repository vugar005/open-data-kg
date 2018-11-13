import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategorySidebarComponent } from './category-sidebar/category-sidebar.component';
import { CategoriesRoutes } from './categories.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {InputModule} from 'ngx-input';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutes,
    FontAwesomeModule,
    InputModule
  ],
  declarations: [CategoriesComponent, CategoryListComponent, CategorySidebarComponent]
})
export class CategoriesModule { }
