import { ActivatedRoute } from '@angular/router';
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
  constructor(private sharedService: SharedService, private route: ActivatedRoute) {
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
  onSelected(e) {
    this.form.form.controls['datasetFullname'].setValue(e.name);
    this.onSubmit(this.form);
    console.log(this.form.value)
    console.log(e)
   this.selected.next({data: e, form: this.form});
  }

}
