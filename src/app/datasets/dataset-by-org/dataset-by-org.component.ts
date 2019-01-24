import { SelectType } from 'src/app/shared/models/select-type.model';
import { DatasetGroupListComponent } from './../dataset-group-list/dataset-group-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { OrgQuery } from '../models/orgQuery.model';

@Component({
  selector: 'app-dataset-by-org',
  templateUrl: './dataset-by-org.component.html',
  styleUrls: ['./dataset-by-org.component.scss']
})
export class DatasetByOrgComponent  {

  @ViewChild('dataset_list') list: DatasetGroupListComponent;
  faSearch = faSearch;
  datasetId: string;
  constructor(private sharedService: SharedService, private router: Router) {}
  onSubmit(form: NgForm) {
    this.exitDetail();
    setTimeout(() => {
     this.list.getListByOrganization(form.value);
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
