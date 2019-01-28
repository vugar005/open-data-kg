import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'feedback-box',
  templateUrl: './feedback-box.component.html',
  styleUrls: ['./feedback-box.component.scss']
})
export class FeedbackBoxComponent implements OnInit {
  @Input() defaultIndex: string;
  @Input() insertApi: string;
  @Input() datasetId: string;
  @Output() ratingUpdated = new EventEmitter();
  index = null;
  ceilDefaultIndex: number;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
   this.ceilDefaultIndex = Math.ceil(+this.defaultIndex);
    this.index = this.ceilDefaultIndex;
  }
  enter(i: number) {
    this.index = i;
  }
  leave() {
    this.index = this.ceilDefaultIndex;
  }
  updateRating(rating: number) {
    this.index = rating;
    this.ceilDefaultIndex = rating;
  const body = {
    kv: {
      rating: rating,
      datasetId: this.datasetId
    }
  };
  this.sharedService.getTableData(this.insertApi, body, true)
  .subscribe(res => this.ratingUpdated.next(), (er) => this.index = this.ceilDefaultIndex);
  }
}
