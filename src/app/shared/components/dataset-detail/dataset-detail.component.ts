import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dataset } from '../../models/dataset.model';
import { map, shareReplay } from 'rxjs/operators';
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
  dataset: Dataset;
  datasetApi: any;
  datasetKeywords: any;
  left = faChevronLeft;
  @HostBinding('@slideInRight') animate = this.isInner;
//  @HostBinding('@zoomInLeft') leave = true;
  constructor(private sharedService: SharedService, private route: ActivatedRoute) { }

  ngOnInit() {
   if (this.id) {
     this.getDatasetById(this.id);
   } else {
     this.getRoutId();
   }
  }
  getRoutId() {
   this.route.params.subscribe(res => {
     if (!res['id']) {return; }
     this.getDatasetById(res['id']);
   });
  }
  getDatasetById(id: string) {
   this.sharedService.getDatasetById(id).subscribe(res => {
   this.dataset = res;
   this.datasetApi = this.dataset.tbl.find(tb => tb.tn === 'API');
   this.datasetKeywords = this.dataset.tbl.find(tb => tb.tn === 'KEYWORD');
 });
  //  this.datasetApi$ = this.dataset$
  //  .pipe(
  //    map(dataset => dataset.tbl.find(tb => tb.tn === 'API'))
  //  );
  //  this.datasetKeywords$ = this.dataset$
  //  .pipe(
  //    map(dataset => dataset.tbl.find(tb => tb.tn === 'KEYWORD'))
  //  );
  }

}
