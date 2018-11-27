import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatasetListComponent } from '../shared/components/dataset-list/dataset-list.component';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CategoryQuery } from '../categories/models/category-query.model';
import { Observable } from 'rxjs';
import { SelectType } from '../shared/models/select-type.model';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { OrgQuery } from './models/orgQuery.model';

@Component({
  selector: 'organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  @ViewChild('dataset_list') list: DatasetListComponent;
  faSearch = faSearch;
  orgQuery: OrgQuery = {
    orgId: '',
    formatId: '',
    datasetFullName: ''
  };
  datasetId: string;
  formatTypes$: Observable<SelectType[]>;
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
   this.router.navigate([e, '']);
  }
  exitDetail() {
    this.datasetId = undefined;
  }
  handleResultSelected(e: any) {
    this.datasetId = e.id;
  }

}
