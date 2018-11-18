import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.scss']
})
export class CategoryOverviewComponent implements OnInit {
  faSearch = faSearch;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onNavigate(e: MouseEvent) {
   e.preventDefault();
   // console.log(e);
    setTimeout(() => {
      this.router.navigateByUrl('/categories');
    }, 10)
  }

}
