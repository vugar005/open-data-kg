import { DatasetsService } from './../datasets.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadCrumb } from 'src/app/shared/models/breadcrumb.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dataset-by-cat',
  templateUrl: './dataset-by-cat.component.html',
  styleUrls: ['./dataset-by-cat.component.scss']
})
export class DatasetByCatComponent {
  faSearch = faSearch;
  breadcrumbs: BreadCrumb[] = [

  ];
  constructor(private router: Router,
    private datsetService: DatasetsService, private route: ActivatedRoute,
    private translateService: TranslateService
    ) {
      this.initBreadcrumbs();
    }
  onSubmit(form: NgForm) {
    this.datsetService.datasetFilter$.next(form);
  }
  onNavChanged(e) {
   this.router.navigate([`/home/datasets/by-${e}/0`]);
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      {label: this.translateService.instant('~home'), url: ''},
      {label: this.translateService.instant('~datasets'), url: `/home/datasets/by-category/0`}
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
  console.log(f.value)
  this.router.navigate(['/home/datasets/searchResults'], {queryParams: {query: f.value.datasetFullname}});
 }

}
