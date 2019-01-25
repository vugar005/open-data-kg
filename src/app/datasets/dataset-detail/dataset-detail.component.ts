import { ShareDialogComponent } from './../share-dialog/share-dialog.component';
import { MatDialog } from '@angular/material';
import { AppState } from './../../reducers/index';
import { SharedService } from 'src/app/shared/shared.service';
import { DatasetDetail } from '../models/dataset-detail.model';
import { Component, OnInit, Input, Output, EventEmitter, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { trigger, useAnimation, transition } from '@angular/animations';
import {slideInRight, zoomInLeft} from 'ng-animate';
import { DatasetsService } from '../datasets.service';
import { Dataset } from '../models/dataset.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedIn } from 'src/app/auth/store/auth.selectors';
@Component({
  selector: 'dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.scss'],
  animations: [
    trigger('slideInRight', [transition(':enter', useAnimation(slideInRight, {params: {timing: 0.3}}))]),
    trigger('zoomInLeft', [transition(':leave', useAnimation(zoomInLeft, {params: {timing: 0.6}}))])
  ]
})
export class DatasetDetailComponent implements OnInit, OnChanges {
  @Input() id: string;
  @Input() isInner = false;
  @Output() navBack = new EventEmitter<void>();
  dataset: DatasetDetail;
  datasetApi: any;
  datasetKeywords: any;
  datasetCategories: any;
  left = faChevronLeft;
  favouriteDatasets: Dataset[];
  isLoggedIn$: Observable<boolean>;
  datasetPreview: Dataset;
  @HostBinding('@slideInRight') animate = this.isInner;
  constructor(
    private datasetService: DatasetsService,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private store: Store<AppState>,
    private router: Router,
    private dialog: MatDialog
    ) {
      this.isLoggedIn$ = store.select(isLoggedIn);
      this.isInner = this.route.snapshot.data['isInner'];
    }

  ngOnInit() {
   if (this.id) {
     this.getDatasetById(this.id);
   } else {
     this.getRoutId();
   }
   this.getFavoriteDatasets();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['id']) {
     this.getDatasetById(changes['id'].currentValue);
    }
  }
  getRoutId() {
   this.route.params.subscribe(res => {
     console.log(res)
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
    this.datasetService.markDatasetAsFavorite(id).subscribe(res => {
     this.sharedService.createNotification('Sucess', 'Saving Dataset');
      this.getFavoriteDatasets();
    });
  }
  onUnFavoriteMark(id: string) {
  const favDataset = this.getFavoriteDataset();
    this.datasetService.unmarkDatasetAsFavorite(favDataset.id).subscribe(res => {
  //    this.sharedService.createNotification('Sucess', 'Unsaving Dataset');
      this.getFavoriteDatasets();
    });
  }
  getFavoriteDatasets() {
    this.sharedService.getTableData('api/post/Permission/Datasets/GetFavoriteDatasetList')
    .subscribe(res => {
      if (res && res.r) {
        this.favouriteDatasets = res.r;
      }
    });
  }
  isFavorite() {
    if (!this.favouriteDatasets) {return; }
    return this.getFavoriteDataset();
  }
  getFavoriteDataset(): Dataset {
    return this.favouriteDatasets.find(f => f.datasetId === this.dataset.kv.id);
  }
  onResourcesNavigate(id: string, format: string) {
    this.router.navigate([`/home/datasets/${id}/resources`], {queryParams: {type: format}});
    // window.open(
    //   `http://localhost:4200/#/home/datasets/${id}/resources?type=${format}`,
    //   '_blank' // <- This is what makes it open in a new window.
    // );
  }
  onShareClick() {
    console.log(this.dataset.kv.id)
  const ref = this.dialog.open(ShareDialogComponent, {
    data: this.dataset.kv.id,
    autoFocus: false
  });
  }

}
