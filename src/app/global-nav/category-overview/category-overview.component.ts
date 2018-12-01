import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  Category } from 'src/app/datasets/models/category.model';
import { DatasetsService } from 'src/app/datasets/datasets.service';

@Component({
  selector: 'category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.scss']
})
export class CategoryOverviewComponent implements OnInit {
  faSearch = faSearch;
  categories$: Observable<Category[]>;
  constructor(private router: Router, private datasetService: DatasetsService) { }

  ngOnInit() {
   this.categories$ = this.datasetService.getCategories();
  }
  onNavigate(id: string) {
   // console.log(e);
    setTimeout(() => {
   //   this.router.navigate(['/categories', id ]);
      this.router.navigate(['/datasets/by-category' ]);
    }, 10);
  }

}
