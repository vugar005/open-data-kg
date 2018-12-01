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

  @ViewChild('f') form: NgForm;
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
  onSubmit() {
    this.exitDetail();
    setTimeout(() => {
      this.orgQuery = {...this.form.value};
      this.list.getList();
    }, 0);
  }
  onInputEnter(e: KeyboardEvent) {
    if (e.keyCode === 13) {
     this.onSubmit();
    }
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
    if (!e) {
      this.handleShowAll();
     return;
    }
    this.datasetId = e.id;
  }
  handleShowAll() {
    this.router.navigate(['/datasets/searchResults'], {queryParams: {search: this.inputValue}});
   }
  toggleHeader(e: HTMLElement) {
    this.sharedService.toggleHeader.next(e);
    }

}
