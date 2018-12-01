import { DatasetsService } from './../../datasets/datasets.service';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Category } from 'src/app/datasets/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'organization-overview',
  templateUrl: './organization-overview.component.html',
  styleUrls: ['./organization-overview.component.scss']
})
export class OrganizationOverviewComponent implements OnInit {
  faSearch = faSearch;
  items$: Observable<Category[]>;
  constructor(private router: Router, private datasetSevice: DatasetsService) { }

  ngOnInit() {
   this.items$ = this.datasetSevice.getOrganizations();

  }
  onNavigate(id: string) {
   // console.log(e);
    setTimeout(() => {
      this.router.navigate(['/datasets/by-organization'], { queryParams: {id: id} });
    }, 10);
  }
}
