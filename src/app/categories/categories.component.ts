import { Component, OnInit, ChangeDetectionStrategy, ViewChild, EventEmitter, Output, HostListener } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { DatasetListComponent } from '../shared/components/dataset-list/dataset-list.component';
import { CategoryQuery } from './models/category-query.model';
import { SelectType } from '../shared/models/select-type.model';
import { Observable, fromEvent } from 'rxjs';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { tap} from 'rxjs/operators';
@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  @ViewChild('dataset_list') list: DatasetListComponent;
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

  ngOnInit() {
  }



  onSubmit() {
    this.exitDetail();
    setTimeout(() => {
      this.categoryQuery = {...this.form.value};
      this.list.getList();
    }, 0);
  }
  onInputEnter(e: KeyboardEvent) {
    if (e.keyCode === 13) {
     this.onSubmit();
    }
  }
  catIdChanged(e: string) {
   this.categoryQuery = {
     ...this.categoryQuery,
     categoryId: e
   };
   this.exitDetail();
  }
  onNavChanged(e) {
   this.router.navigate([e, '']);
  }
 exitDetail() {
  this.datasetId = undefined;
 }
 onReturn() {
   setTimeout(() => {
    this.exitDetail();
   }, 600);
 }
 handleResultSelected(e: any) {
  if (!e) {
    this.handleShowAll();
   return;
  }
  this.datasetId = e.id;
}
handleShowAll() {
  this.router.navigate(['dataset-results'], {queryParams: {search: this.inputValue}});
 }
toggleHeader(e: HTMLElement) {
this.sharedService.toggleHeader.next(e);
}

}
