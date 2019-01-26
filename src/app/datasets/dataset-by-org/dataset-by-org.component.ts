import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DatasetsService } from '../datasets.service';

@Component({
  selector: 'app-dataset-by-org',
  templateUrl: './dataset-by-org.component.html',
  styleUrls: ['./dataset-by-org.component.scss']
})
export class DatasetByOrgComponent  {
  faSearch = faSearch;
  constructor( private router: Router, private datasetService: DatasetsService) {}
  onSubmit(form: NgForm) {
    this.datasetService.datasetFilter$.next(form);
  }
  onNavChanged(e) {
   this.router.navigate([`/home/datasets/by-${e}/0`]);
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
