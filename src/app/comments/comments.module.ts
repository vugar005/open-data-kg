import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { CommentBoxComponent } from './comments-list/comment-box/comment-box.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
  ],
  declarations: [CommentsComponent, CommentsListComponent, CommentBoxComponent, CommentAddComponent],
  exports: [CommentsComponent, CommentsListComponent, CommentBoxComponent, CommentAddComponent]
})
export class CommentsModule { }
