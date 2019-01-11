import { SharedService } from 'src/app/shared/shared.service';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { DatasetGroupListComponent } from './../dataset-group-list/dataset-group-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CategoryQuery } from 'src/app/datasets/models/category-query.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'dataset-by-cat',
  templateUrl: './dataset-by-cat.component.html',
  styleUrls: ['./dataset-by-cat.component.scss']
})
export class DatasetByCatComponent {

  @ViewChild('dataset_list') list: DatasetGroupListComponent;
  faSearch = faSearch;
  categoryQuery: CategoryQuery = {
    categoryId: '',
    formatId: '',
    datasetFullname: ''
  };
  formatTypes$: Observable<SelectType[]>;
  datasetId: string;
  inputValue: string;
  constructor(private sharedService: SharedService, private router: Router) {
    this.formatTypes$ = this.sharedService.getTypes('181116173908947318');
   }
  onSubmit(form: NgForm) {
    this.exitDetail();
    setTimeout(() => {
      this.categoryQuery = {...form.value};
      this.list.getList();
    }, 0);
  }
  catIdChanged(e: string) {
    this.categoryQuery = {
      ...this.categoryQuery,
      categoryId: e
    };
   this.exitDetail();
  }
  onNavChanged(e) {
   this.router.navigate([`/datasets/by-${e}`]);
  }
 exitDetail() {
  this.datasetId = undefined;
 }
 onReturn() {
   setTimeout(() => {
    this.exitDetail();
   }, 100);
 }
 handleResultSelected(e: any) {
  if (!e.data) {
    this.handleShowAll(e.form);
   return;
  }
  this.datasetId = e.data.id;
}
handleShowAll(f: NgForm) {
  this.router.navigate(['/datasets/searchResults'], {queryParams: {query: f.value.datasetFullName}});
 }
toggleHeader(e: HTMLElement) {
this.sharedService.toggleHeader.next(e);
}

}
