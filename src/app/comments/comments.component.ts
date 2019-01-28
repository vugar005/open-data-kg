import { AppState } from './../reducers/index';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from './../shared/shared.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
  constructor(protected http: HttpClient, private sharedService: SharedService,
    private translateService: TranslateService) { }

  ngOnInit() {
  this.getCommentList(this.getApi);
  }
  getCommentList(api: string) {
    const body = {
      kv: {
      }
    };
    body.kv[this.kvKey] = this.id;
    this.comments$ = this.sharedService.getTableDataRows(api, body, true);
  }
  onSubmitted(value) {
    this.sharedService.createNotification('sucess', this.translateService.instant('~commentAddSuccess'));
    this.getCommentList(this.getApi);
  }


}
