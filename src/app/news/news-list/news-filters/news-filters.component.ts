import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedService } from 'src/app/shared/shared.service';
import { NewsTypeAheadAdapter } from './news-typeahead.adapter';

@Component({
  selector: 'news-filters',
  templateUrl: './news-filters.component.html',
  styleUrls: ['./news-filters.component.scss']
})
export class NewsFiltersComponent {
  @ViewChild('f') form: NgForm;
  @Input() type: string;
  @Output() formSubmit = new EventEmitter<NgForm>();
  @Output() public selected = new EventEmitter<any>();
  catTypes$: Observable<SelectType[]>;
  adapter = new NewsTypeAheadAdapter(this.http);
  constructor(private sharedService: SharedService, private http: HttpClient) {
    this.catTypes$ = this.sharedService.getTypes('1000008');
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
    this.form.controls['title'].setValue(e.title);
    this.onSubmit(this.form);
 //   this.form.controls['title'].setValue('');
  }
}
