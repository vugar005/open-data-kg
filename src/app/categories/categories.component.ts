import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { DatasetByCategoryGroupByOrg } from '../shared/models/DatasetByCategoryGroupByOrg.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  faSearch = faSearch;
  catId: string;
  constructor() { }

  ngOnInit() {
  }

}
