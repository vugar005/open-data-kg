import { SharingCommentInsertComponent } from './sharing-comment-insert/sharing-comment-insert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntSharingCommentsComponent } from './ent-sharing-comments.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { SharingCommentsRoutes } from './sharing-comments.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    SharingCommentsRoutes
  ],
  declarations: [EntSharingCommentsComponent, SharingCommentInsertComponent],
  entryComponents: [SharingCommentInsertComponent]
})
export class EntSharingCommentsModule { }
