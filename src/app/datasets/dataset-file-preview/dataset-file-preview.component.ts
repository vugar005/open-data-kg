import { Component, OnInit, Input } from '@angular/core';
import { Dataset } from '../models/dataset.model';

@Component({
  selector: 'dataset-file-preview',
  templateUrl: './dataset-file-preview.component.html',
  styleUrls: ['./dataset-file-preview.component.scss']
})
export class DatasetFilePreviewComponent implements OnInit {
 @Input() datasetPreview: Dataset;
  constructor() { }

  ngOnInit() {
    console.log(this.datasetPreview);
  }

}
