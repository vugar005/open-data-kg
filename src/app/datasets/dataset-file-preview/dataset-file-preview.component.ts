import { DatasetDetail } from './../models/dataset-detail.model';
import { DatasetsService } from 'src/app/datasets/datasets.service';
import { Component, OnInit, Input } from '@angular/core';
import { Dataset } from '../models/dataset.model';

@Component({
  selector: 'dataset-file-preview',
  templateUrl: './dataset-file-preview.component.html',
  styleUrls: ['./dataset-file-preview.component.scss']
})
export class DatasetFilePreviewComponent implements OnInit {
 @Input() dataset: DatasetDetail;
 show = 'excel';
  constructor(private datasetService: DatasetsService) { }

  ngOnInit() {
    this.dataset = this.datasetService.resourceDataset;
  }

}
