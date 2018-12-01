import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dataset-search-box',
  templateUrl: './dataset-search-box.component.html',
  styleUrls: ['./dataset-search-box.component.scss']
})
export class DatasetSearchBoxComponent implements OnInit {
  @Input() dataset: any;
  constructor() { }

  ngOnInit() {
  //  this.dataset.allFormat.split(' ').forEach(element => {
  //  });
  }

}
