import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  faSearch = faSearch;
  constructor() { }

  ngOnInit() {
  }

}
