import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { Observable } from 'rxjs';
import { DatasetsService } from '../datasets.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'dataset-group-list',
  templateUrl: './dataset-group-list.component.html',
  styleUrls: ['./dataset-group-list.component.scss'],
  animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn, {params: {timing: 0.5, delay: 0}}))])]
})
export class DatasetGroupListComponent implements OnInit, OnChanges {
  @Output() boxSelected = new EventEmitter();
  @Input() type: string;
  list$: Observable<any>;
  fadeIn = true;
  id: string;
  emptyQuery = {formatId: '', datasetFullName: ''};
  constructor(private datasetService: DatasetsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.listenToRouteQuery();
  }
  isExpanded(i) {
   // return setTimeout(() => i === 0, 300);
  }
  listenToRouteQuery() {
    this.route.queryParams.subscribe(res => {
      this.id  = res['id'];
       if (!this.id) {
         this.id = '0';
       }
       this.getList(this.emptyQuery);
    });
  }
  ngOnChanges(changes: SimpleChanges) {
  }
  getList(value) {
    if (this.type === 'category') {
      this.getListByCategory(value);
      return;
    }
    if (this.type === 'organization') {
      this.getListByOrganization(value);
    }
  }
  getListByCategory(value) {
   this.list$ = this.datasetService.getDatasetsWithGroupByOrg({...value, categoryId: this.id});
  }
  getListByOrganization(value) {
    this.list$ = this.datasetService.getDatasetsWithGroupByOrg({...value, orgId: this.id});
  }
}
