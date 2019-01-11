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
export class DatasetByOrgComponent implements OnInit {

  @ViewChild('dataset_list') list: DatasetGroupListComponent;
  faSearch = faSearch;
  orgQuery: OrgQuery = {
    orgId: '',
    formatId: '',
    datasetFullName: ''
  };
  datasetId: string;
  formatTypes$: Observable<SelectType[]>;
  inputValue: string;
  constructor(private sharedService: SharedService, private router: Router) {
    this.formatTypes$ = this.sharedService.getTypes('181116173908947318');
   }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.exitDetail();
    setTimeout(() => {
      this.orgQuery = {...form.value, orgId: this.orgQuery.orgId};
      this.list.getList();
    }, 0);
  }
  checkboxIdChanged(e: string) {
   this.orgQuery = {
     ...this.orgQuery,
     orgId: e
   };
   this.exitDetail();
  }
  onNavChanged(e) {
    this.router.navigate([`/datasets/by-${e}`]);
  }
  exitDetail() {
    this.datasetId = undefined;
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
