import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Dataset } from 'src/app/datasets/models/dataset.model';
import { DatasetDetail } from 'src/app/datasets/models/dataset-detail.model';

@Component({
  selector: 'popular-datasets',
  templateUrl: './popular-datasets.component.html',
  styleUrls: ['./popular-datasets.component.scss']
})
export class PopularDatasetsComponent implements OnInit {
  datasets: Dataset[];
  datasetsByComment: Dataset[];
  datasetsByReview: Dataset[];
  datasetsByDownloads: Dataset[];
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getPopularDatasets();
  }
  getPopularDatasets() {
    this.sharedService.getTableDataRows('api/get/Permission/Datasets/GetDatasetReportList')
    .subscribe( res => {
      this.datasets = res;
      console.log(res);
      this.datasetsByComment = this.datasets.filter(dataset => dataset.code === 'COMMENT')
      this.datasetsByReview = this.datasets.filter(dataset => dataset.code === 'REVIEW')
      this.datasetsByDownloads= this.datasets.filter(dataset => dataset.code === 'DOWNLOADS')
    });
  }
}
