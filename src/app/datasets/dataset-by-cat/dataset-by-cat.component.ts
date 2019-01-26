import { DatasetsService } from './../datasets.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dataset-by-cat',
  templateUrl: './dataset-by-cat.component.html',
  styleUrls: ['./dataset-by-cat.component.scss']
})
export class DatasetByCatComponent {
  faSearch = faSearch;
  constructor(private router: Router,
    private datsetService: DatasetsService, private route: ActivatedRoute) {}
  onSubmit(form: NgForm) {
    this.datsetService.datasetFilter$.next(form);
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
