import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntNewsComponent } from './ent-news.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { EntNewsRoutes } from './ent-news.routing';
import { NewsInsertDialogComponent } from './news-insert-dialog/news-insert-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    EntNewsRoutes
  ],
  declarations: [EntNewsComponent, NewsInsertDialogComponent],
  entryComponents: [NewsInsertDialogComponent]
})
export class EntNewsModule { }
