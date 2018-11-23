import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/categories/category.service';
import { CategoryQuery } from 'src/app/categories/models/category-query.model';
import { OrgQuery } from 'src/app/organizations/models/orgQuery.model';
import { OrganizationService } from 'src/app/organizations/organization.service';


@Component({
  selector: 'dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls: ['./dataset-list.component.scss']
})
export class DatasetListComponent implements OnInit, OnChanges {
  @Input() type: string;
  @Output() boxSelected = new EventEmitter();
  list$: Observable<any>;
  @Input() categoryQuery: CategoryQuery;
  @Input() orgQuery: OrgQuery;
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
