import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  Category } from 'src/app/categories/models/category.model';
import { CategoryService } from 'src/app/categories/category.service';

@Component({
  selector: 'category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.scss']
})
export class CategoryOverviewComponent implements OnInit {
  faSearch = faSearch;
  categories$: Observable<Category[]>;
  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
   this.categories$ = this.categoryService.getCategories();
  }
  onNavigate(id: string) {
   // console.log(e);
    setTimeout(() => {
      this.router.navigate(['/categories', id ]);
    }, 10);
  }

}
