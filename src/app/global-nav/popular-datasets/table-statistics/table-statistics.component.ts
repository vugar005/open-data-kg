import { Component, OnInit, Input } from '@angular/core';
import { Dataset } from 'src/app/datasets/models/dataset.model';

@Component({
  selector: 'table-statistics',
  templateUrl: './table-statistics.component.html',
  styleUrls: ['./table-statistics.component.scss']
})
export class TableStatisticsComponent implements OnInit {
  @Input() datasets: Dataset[];
  @Input() caption: string;
  constructor() { }

  ngOnInit() {
  }

}
