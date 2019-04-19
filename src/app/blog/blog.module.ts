import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-list/blog-item/blog-item.component';
import { BlogRoutes } from './blog.routing';
import { SharedModule } from '../shared/shared.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutes,
    SharedModule,
    FooterModule
  ],
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogItemComponent,
    BlogDetailComponent
  ]
})
export class BlogModule { }
