import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dataset } from '../../models/dataset.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.scss']
})
export class DatasetDetailComponent implements OnInit {
  @Input() id: string;
  dataset$: Observable<Dataset>;
  datasetApi$: Observable<any>;
  datasetKeywords$: Observable<any>;
  constructor(private sharedService: SharedService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.getRoutId();
   if (this.id) {
     this.getDatasetById(this.id);
   }
  }
  getRoutId() {
   this.route.params.subscribe(res => {
     if (!res['id']) {return; }
     this.getDatasetById(res['id']);
   });
  }
  getDatasetById(id: string) {
   this.dataset$ = this.sharedService.getDatasetById(id);
   this.datasetApi$ = this.dataset$
   .pipe(
     map(dataset => dataset.tbl.find(tb => tb.tn === 'API'))
   );
   this.datasetKeywords$ = this.dataset$
   .pipe(
     map(dataset => dataset.tbl.find(tb => tb.tn === 'KEYWORD'))
   );
  }

}
