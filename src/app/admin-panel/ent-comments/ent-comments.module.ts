import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntCommentsComponent } from './ent-comments.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { EntCommentsRoutes } from './ent-comments.routing';
import { CommentInsertDialogComponent } from './comment-insert-dialog/comment-insert-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    EntCommentsRoutes
  ],
  declarations: [EntCommentsComponent, CommentInsertDialogComponent],
  entryComponents: [CommentInsertDialogComponent]
})
export class EntCommentsModule { }
