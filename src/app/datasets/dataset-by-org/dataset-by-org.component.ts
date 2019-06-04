import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DatasetsService } from '../datasets.service';
import { BreadCrumb } from 'src/app/shared/models/breadcrumb.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dataset-by-org',
  templateUrl: './dataset-by-org.component.html',
  styleUrls: ['./dataset-by-org.component.scss']
})
export class DatasetByOrgComponent  {
  faSearch = faSearch;
  breadcrumbs: BreadCrumb[] = [

  ];
  constructor( private router: Router, private datasetService: DatasetsService,
      private translateService: TranslateService
    ) {
    this.initBreadcrumbs();
  }
  onSubmit(form: NgForm) {
    this.datasetService.datasetFilter$.next(form);
  }
  onNavChanged(e) {
   this.router.navigate([`/home/datasets/by-${e}/0`]);
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      {label: this.translateService.instant('~home'), url: ''},
      {label: this.translateService.instant('~datasets'), url: `/home/datasets/by-organization/0`}
    ];
  }
 handleResultSelected(e: any) {
  if (!e.data) {
    this.handleShowAll(e.form);
   return;
  }
  this.onSubmit(e.form);
}
handleShowAll(f: NgForm) {
  this.router.navigate(['/home/datasets/searchResults'], {queryParams: {query: f.value.datasetFullName}});
 }

}
