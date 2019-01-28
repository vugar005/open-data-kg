import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DatasetDetail } from './../models/dataset-detail.model';
import { DatasetsService } from 'src/app/datasets/datasets.service';
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { TableModel } from 'src/app/shared/models/table.model';

@Component({
  selector: 'dataset-file-preview',
  templateUrl: './dataset-file-preview.component.html',
  styleUrls: ['./dataset-file-preview.component.scss']
})
export class DatasetFilePreviewComponent implements OnInit {
  dataset: TableModel;
  dataLink: string;
  apiFormat: string;
  googleDocsFormat = ['DOC', 'XLS', 'PPT', 'DOCX', 'XLSX', 'PPTX', 'PDF', 'HTML', 'TXT',  'CSV', 'XML'];
  constructor(
    private datasetService: DatasetsService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.getRoutId();
    this.getQueryParams();
  }
  getRoutId() {
    this.route.params.subscribe(res => {
      if (!res['id']) {
        return;
      }
      this.getDatasetById(res['id']);
    });
  }
  getQueryParams() {
    this.route.queryParams.subscribe(res => {
    this.apiFormat = res['type'];
    });
  }

  getDatasetById(id: string) {
    const body = {
      kv: {
        id: id
      }
    };
    this.sharedService.getTableData('api/get/Permission/Datasets/GetDatasetDetails', body).subscribe(res => {
      this.dataset = res;
      const apiTbl = this.dataset.tbl.find( tbl => tbl.tn === 'API');
      const apiRow = apiTbl.r.find( row => row.format === this.apiFormat);
      if (apiRow.formatTypeCode === 'FRMT1') {
        this.dataLink = apiRow && apiRow.openPortalLink;
      } else if (apiRow.formatTypeCode === 'FRMT2') {
        this.dataLink = apiRow && apiRow.link;
      }
    });
  }
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  onBack() {
    window.history.back();
  }
}
