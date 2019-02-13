import { DatasetTypeAheadAdapter } from './../dataset-typeahead.adapter';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SharedService } from './../../shared/shared.service';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'dataset-filters',
  templateUrl: './dataset-filters.component.html',
  styleUrls: ['./dataset-filters.component.scss']
})
export class DatasetFiltersComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  @Output() formSubmit = new EventEmitter<NgForm>();
  @Output() public selected = new EventEmitter<any>();
  formatTypes$: Observable<SelectType[]>;
  adapter = new DatasetTypeAheadAdapter(this.http);
  constructor(private sharedService: SharedService, private http: HttpClient, private router: Router) {
    this.formatTypes$ = this.sharedService.getTypes('181116173908947318');
   }

  ngOnInit() {
  }
  onInputEnter(e: KeyboardEvent, form) {
    if (e.keyCode === 13) {
     this.onSubmit(form);
    }
  }
  onSubmit(form: NgForm) {
    this.formSubmit.next(form);
  }
  handleResultSelected(e) {
    this.form.form.controls['datasetFullname'].setValue(e.name);
    this.onSubmit(this.form);
    console.log(this.form.value)
    console.log(e)
   this.selected.next({data: e, form: this.form});
  }
  handleShowAll() {
    console.log(this.form)
    this.router.navigate(['home/datasets/searchResults'], {queryParams: {query: this.form.controls['datasetFullname'].value}});
  }

}
