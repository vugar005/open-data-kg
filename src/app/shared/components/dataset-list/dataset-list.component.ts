import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/categories/category.service';
import { CategoryQuery } from 'src/app/categories/models/category-query.model';


@Component({
  selector: 'dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls: ['./dataset-list.component.scss']
})
export class DatasetListComponent implements OnInit, OnChanges {
  @Input() type: string;
  list$: Observable<any>;
  @Input() categoryQuery: CategoryQuery;
  constructor(private categoryService: CategoryService) { }

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

  }

}
