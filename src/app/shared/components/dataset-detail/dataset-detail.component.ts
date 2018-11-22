import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dataset } from '../../models/dataset.model';

@Component({
  selector: 'dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.scss']
})
export class DatasetDetailComponent implements OnInit {
  dataset$: Observable<Dataset>;
  datasetApi$: Observable<Dataset>;
  constructor(private sharedService: SharedService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.getRoutId();
  }
  getRoutId() {
   this.route.params.subscribe(res => {
     if (!res['id']) {return; }
     this.getDatasetById(res['id']);
   });
  }
  getDatasetById(id: string) {
   this.dataset$ = this.sharedService.getDatasetById(id);
   this.sharedService.getApiByDatasetById(id).subscribe(res => console.log(res))
  }

}
