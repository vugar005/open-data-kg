import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Dataset } from 'src/app/datasets/models/dataset.model';

@Component({
  selector: 'popular-datasets',
  templateUrl: './popular-datasets.component.html',
  styleUrls: ['./popular-datasets.component.scss']
})
export class PopularDatasetsComponent implements OnInit {
  datasets: Dataset[];
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getPopularDatasets()
  }
  getPopularDatasets() {
    this.sharedService.getTableData('api/get/Permission/Datasets/GetPopularDatasetList')
    .subscribe( res => this.datasets = res.r);
  }
}
