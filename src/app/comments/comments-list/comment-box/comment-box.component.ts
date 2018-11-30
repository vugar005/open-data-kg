import { Component, OnInit, Input } from '@angular/core';
import { CommentModel } from '../../models/comment.model';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getApiUrl } from 'src/app/auth/store/auth.selectors';

@Component({
  selector: 'comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Input() comment: CommentModel;
  apiUrl$: Observable<string>;
  constructor(private store: Store<AppState>) {
   this.apiUrl$  = store.select(getApiUrl);
  }

  ngOnInit() {
  }

}
