import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/categories/category.service';
import { CategoryQuery } from 'src/app/categories/models/category-query.model';
import { OrgQuery } from 'src/app/organizations/models/orgQuery.model';
import { OrganizationService } from 'src/app/organizations/organization.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls: ['./dataset-list.component.scss'],
  animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn, {params: {timing: 0.5, delay: 0}}))])]
})
export class DatasetListComponent implements OnInit, OnChanges {
  @Output() boxSelected = new EventEmitter();
  @Input() allCount = new EventEmitter();
  @Input() type: string;
  list$: Observable<any>;
  @Input() categoryQuery: CategoryQuery;
  @Input() orgQuery: OrgQuery;
  fadeIn = true;
  constructor(private categoryService: CategoryService, private orgService: OrganizationService) { }

  ngOnInit() {
      this.getList();
  }
  isExpanded(i) {
   // return setTimeout(() => i === 0, 300);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoryQuery']) {
      this.getList();
    }
    if (changes['orgQuery']) {
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
   this.list$ = this.categoryService.getDatasetsWithGroupByOrg(this.categoryQuery);
  }
  getListByOrganization() {
    this.list$ = this.orgService.getDatasetsWithGroupByCat(this.orgQuery);
  }

}
