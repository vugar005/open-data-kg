import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { Observable } from 'rxjs';
import { CategoryQuery } from 'src/app/datasets/models/category-query.model';
import { OrgQuery } from 'src/app/datasets/models/orgQuery.model';
import { DatasetsService } from '../datasets.service';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'dataset-group-list',
  templateUrl: './dataset-group-list.component.html',
  styleUrls: ['./dataset-group-list.component.scss'],
  animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn, {params: {timing: 0.5, delay: 0}}))])]
})
export class DatasetGroupListComponent implements OnInit, OnChanges {

  @Output() boxSelected = new EventEmitter();
  @Input() allCount = new EventEmitter();
  @Input() type: string;
  list$: Observable<any>;
  @Input() categoryQuery: CategoryQuery;
  @Input() orgQuery: OrgQuery;
  fadeIn = true;
  constructor(private datasetService: DatasetsService) { }

  ngOnInit() {
  }
  isExpanded(i) {
   // return setTimeout(() => i === 0, 300);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoryQuery'] && changes['categoryQuery'].currentValue.categoryId) {
      this.getList();
    }
    if (changes['orgQuery'] && changes['orgQuery'].currentValue.orgId) {
      this.getList();
    }
  }
  getList() {
    if (this.type === 'category') {
      this.getListByCategory();
      return;
    }
    if (this.type === 'organization') {
      this.getListByOrganization();
    }
  }
  getListByCategory() {
   this.list$ = this.datasetService.getDatasetsWithGroupByOrg(this.categoryQuery);
  }
  getListByOrganization() {
    this.list$ = this.datasetService.getDatasetsWithGroupByCat(this.orgQuery);
  }
}
