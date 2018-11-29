import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'feedback-box',
  templateUrl: './feedback-box.component.html',
  styleUrls: ['./feedback-box.component.scss']
})
export class FeedbackBoxComponent implements OnInit {
  @Input() defaultIndex: number;
  index = null;
  constructor() { }

  ngOnInit() {
    this.index = this.defaultIndex;
  }
  enter(i: number) {
    this.index = i;
  }
  leave() {
    this.index = this.defaultIndex;
  }
}
