import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dataset } from '../../models/dataset.model';
import { map } from 'rxjs/operators';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { trigger, useAnimation, transition } from '@angular/animations';
import {slideInRight, zoomInLeft} from 'ng-animate';
@Component({
  selector: 'dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.scss'],
  animations: [
    trigger('slideInRight', [transition(':enter', useAnimation(slideInRight, {params: {timing: 0.3}}))]),
    trigger('zoomInLeft', [transition(':leave', useAnimation(zoomInLeft, {params: {timing: 0.6}}))])
  ]
})
export class DatasetDetailComponent implements OnInit {
  @Input() id: string;
  @Input() isInner = false;
  @Output() navBack = new EventEmitter<void>();
  dataset$: Observable<Dataset>;
  datasetApi$: Observable<any>;
  datasetKeywords$: Observable<any>;
  left = faChevronLeft;
  @HostBinding('@slideInRight') animate = this.isInner;
//  @HostBinding('@zoomInLeft') leave = true;
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
