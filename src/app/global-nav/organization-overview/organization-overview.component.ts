import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Category } from 'src/app/categories/models/category.model';
import { Router } from '@angular/router';
import { OrganizationService } from 'src/app/organizations/organization.service';

@Component({
  selector: 'organization-overview',
  templateUrl: './organization-overview.component.html',
  styleUrls: ['./organization-overview.component.scss']
})
export class OrganizationOverviewComponent implements OnInit {
  faSearch = faSearch;
  items$: Observable<Category[]>;
  constructor(private router: Router, private orgService: OrganizationService) { }

  ngOnInit() {
   this.items$ = this.orgService.getOrganizations();

  }
  onNavigate(id: string) {
   // console.log(e);
    setTimeout(() => {
      this.router.navigate(['/organizations', id ]);
    }, 10);
  }
}
