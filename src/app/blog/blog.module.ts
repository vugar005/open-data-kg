import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-list/blog-item/blog-item.component';
import { BlogRoutes } from './blog.routing';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutes
  ],
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogItemComponent
  ]
})
export class BlogModule { }
