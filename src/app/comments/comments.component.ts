import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { CommentModel } from './models/comment.model';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() getApi: string;
  @Input() insertApi: string;
  @Input() kvKey: string;
  @Input() id: string;
  comments$: Observable<CommentModel[]>;
  constructor(protected http: HttpClient) { }

  ngOnInit() {
  this.getCommentList(this.getApi);
  }
  getCommentList(api: string) {
    const body = {
      kv: {
     //   datasetId: this.datasetId,
      }
    };
    body.kv[this.kvKey] = this.id;
    this.comments$ = this.http.post<CommentModel[]>(api,  JSON.stringify(body))
    .pipe(
      map((res: any) => {
      if (res && res.tbl && res.tbl[0] && res.tbl[0].r) {
        return  res.tbl[0].r;
      }
    }));
  }
  onSubmit(value) {
  this.insertNewComment(value);
  }
  insertNewComment(value) {
    const body = {
      kv: {
        comment: value.comment
      }
    };
    body.kv[this.kvKey] = this.id;
    console.log(body);
    this.http.post(this.insertApi, JSON.stringify(body))
    .pipe(tap(res => console.log(res)))
    .subscribe(res => {
      this.getCommentList(this.getApi);
    });
  }

}
