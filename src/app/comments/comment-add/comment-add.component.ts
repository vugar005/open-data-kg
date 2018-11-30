import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.scss']
})
export class CommentAddComponent implements OnInit {
  @Input() datasetId: string;
  @Output() commentSubmit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    if (!f.valid) {return; }
    this.commentSubmit.emit(f.value);
  }

}
