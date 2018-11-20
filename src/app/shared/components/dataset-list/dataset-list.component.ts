import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/categories/category.service';

@Component({
  selector: 'dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls: ['./dataset-list.component.scss']
})
export class DatasetListComponent implements OnInit, OnChanges {
  @Input() catId: string;
  list$: Observable<any>;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    if (this.catId) {
      this.getList();
    }
  }
  isExpanded(i) {
   // return setTimeout(() => i === 0, 300);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['catId']) {
      this.getList();
    }
  }
  getList() {
   this.list$ = this.categoryService.getDatasetsWithGroupByOrg(this.catId);
  }

}
