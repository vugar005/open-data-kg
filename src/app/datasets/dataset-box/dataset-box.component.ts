import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dataset-box',
  templateUrl: './dataset-box.component.html',
  styleUrls: ['./dataset-box.component.scss']
})
export class DatasetBoxComponent {
  @Input() dataset: any;
  @Input() mode = 'show';
  constructor() { }
}
