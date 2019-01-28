import { SharedService } from './../../shared/shared.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss']
})
export class CommentAddComponent implements OnInit {
  @Input() id: string;
  @Input() kvKey: string;
  @Input() insertApi: string;
  @Output() commentSubmit = new EventEmitter();
  loading: boolean;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    if (!f.valid) {return; }
    this.insertNewComment(f.value);
  }
  insertNewComment(value) {
    this.loading = true;
    const body = {
      kv: {
        comment: value.comment
      }
    };
    body.kv[this.kvKey] = this.id;
    this.sharedService.getTableData(this.insertApi, body, true)
    .subscribe(res => {
      this.commentSubmit.next();
    });
  }

}
