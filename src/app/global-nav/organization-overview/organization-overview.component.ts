import { DatasetsService } from './../../datasets/datasets.service';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Organization } from 'src/app/datasets/models/organization.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'organization-overview',
  templateUrl: './organization-overview.component.html',
  styleUrls: ['./organization-overview.component.scss']
})
export class OrganizationOverviewComponent implements OnInit {
  faSearch = faSearch;
  items$: Observable<Organization[]>;
  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
   this.items$ = this.sharedService.getTableDataRows('api/get/Permission/Datasets/GetOrganizationWithCategoryCount',  {kv: {}});

  }
  onNavigate(id: string) {
      this.router.navigate([`/home/datasets/by-organization/${id}`]);
  }
}
