import { DomSanitizer } from '@angular/platform-browser';
import { DatasetDetail } from './../models/dataset-detail.model';
import { DatasetsService } from 'src/app/datasets/datasets.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dataset-file-preview',
  templateUrl: './dataset-file-preview.component.html',
  styleUrls: ['./dataset-file-preview.component.scss']
})
export class DatasetFilePreviewComponent implements OnInit {
 @Input() dataset: DatasetDetail;
 show = 'excel';
  constructor(private datasetService: DatasetsService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.dataset = this.datasetService.resourceDataset;
  }
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
