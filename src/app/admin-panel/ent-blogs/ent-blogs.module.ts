import { BlogInsertComponent } from './blog-insert/blog-insert.component';
import { EntBlogsRoutes } from './ent-blogs.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntBlogsComponent } from './ent-blogs.component';
import { SharedAdminModule } from '../shared/shared-admin.module';

@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    EntBlogsRoutes
  ],
  declarations: [EntBlogsComponent, BlogInsertComponent],
  entryComponents: [BlogInsertComponent]
})
export class EntBlogsModule { }
