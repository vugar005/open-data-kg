import { SharedService } from 'src/app/shared/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private sharedService: SharedService, private route: ActivatedRoute,
    private router: Router, private datasetService: DatasetsService) {
    this.type = route.snapshot.data['type'];
   }

  ngOnInit() {
    this.listenToRouteQuery();
    this.listenToFormChanges();
  }
  isExpanded(i) {
   // return setTimeout(() => i === 0, 300);
  }
  listenToFormChanges() {
   this.datasetService.datasetFilter$.subscribe((form: NgForm) => {
     this.getList(form.value);
   });
  }
  listenToRouteQuery() {
    this.route.params.subscribe(res => {
      this.id  = res['id'];
       if (!this.id) {
         console.log('no id')
         this.id = '0';
       }
       console.log(this.id)
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
    const body = {
      kv: {
          ...value,
          categoryId: this.id
        }
      };
   this.list$ = this.sharedService.getTableData('api/get/Permission/Datasets/GetDatasetListByCategoryIdWithGroupByOrg', body);
  }
  getListByOrganization(value) {
    const body = {
      kv: {
          ...value,
          orgId: this.id
        }
      };
    this.list$ = this.sharedService.getTableData('api/get/Permission/Datasets/GetDatasetListByOrgIdWithGroupByCategory', body);
  }
  onSelected(id) {
    this.router.navigate(['./'], {relativeTo: this.route, queryParamsHandling: 'merge', queryParams: {datasetId: id}});
  }
}
