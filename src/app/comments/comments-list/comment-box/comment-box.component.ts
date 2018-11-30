import { Component, OnInit, Input } from '@angular/core';
import { CommentModel } from '../../models/comment.model';

@Component({
  selector: 'comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Input() comment: CommentModel;
  constructor() { }

  ngOnInit() {
  }

}
