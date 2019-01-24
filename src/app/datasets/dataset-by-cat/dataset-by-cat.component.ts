import { SharedService } from 'src/app/shared/shared.service';
import { DatasetGroupListComponent } from './../dataset-group-list/dataset-group-list.component';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'dataset-by-cat',
  templateUrl: './dataset-by-cat.component.html',
  styleUrls: ['./dataset-by-cat.component.scss']
})
export class DatasetByCatComponent {
  @ViewChild('dataset_list') list: DatasetGroupListComponent;
  faSearch = faSearch;
  datasetId: string;
  constructor(private sharedService: SharedService, private router: Router) {}
  onSubmit(form: NgForm) {
    this.exitDetail();
    setTimeout(() => {
     this.list.getListByCategory(form.value);
    }, 0);
  }
  onNavChanged(e) {
   this.router.navigate([`/home/datasets/by-${e}`]);
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
  this.router.navigate(['/home/datasets/searchResults'], {queryParams: {query: f.value.datasetFullName}});
 }
toggleHeader(e: HTMLElement) {
this.sharedService.toggleHeader.next(e);
}

}
