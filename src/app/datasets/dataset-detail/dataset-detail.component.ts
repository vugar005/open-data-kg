import { DatasetDetail } from '../models/dataset-detail.model';
import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { trigger, useAnimation, transition } from '@angular/animations';
import {slideInRight, zoomInLeft} from 'ng-animate';
import { DatasetsService } from '../datasets.service';
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
  dataset: DatasetDetail;
  datasetApi: any;
  datasetKeywords: any;
  datasetCategories: any;
  left = faChevronLeft;
  @HostBinding('@slideInRight') animate = this.isInner;
  constructor(private datasetService: DatasetsService,
    private route: ActivatedRoute
    ) { }

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
   this.datasetService.getDatasetById(id).subscribe(res => {
   this.dataset = res;
   this.datasetApi = this.dataset.tbl.find(tb => tb.tn === 'API');
   this.datasetKeywords = this.dataset.tbl.find(tb => tb.tn === 'KEYWORD');
   this.datasetCategories = this.dataset.tbl.find(tb => tb.tn === 'CATEGORY');
 });
  }
  onRatingUpdated() {
  //  console.log('udpated');
  }
  onFavoriteMark(id: string) {
    this.datasetService.markDatasetAsFavorite(id).subscribe(res => console.log(res));
  }
  onUnFavoriteMark(id: string) {

  }

}
