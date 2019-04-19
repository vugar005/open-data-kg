import { Component, OnInit } from '@angular/core';
import { Dataset } from 'src/app/datasets/models/dataset.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'latest-datasets',
  templateUrl: './latest-datasets.component.html',
  styleUrls: ['./latest-datasets.component.scss']
})
export class LatestDatasetsComponent implements OnInit {
  datasets: Dataset[];
  constructor(private sharedService: SharedService) { }
  ngOnInit() {
    this.getPopularDatasets();
  }
  getPopularDatasets() {
    this.sharedService.getTableDataRows('api/get/Permission/Datasets/GetLatestDatasetList', {kv: {}})
    .subscribe( res => this.datasets = res);
  }
}
