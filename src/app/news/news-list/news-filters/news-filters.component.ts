import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'news-filters',
  templateUrl: './news-filters.component.html',
  styleUrls: ['./news-filters.component.scss']
})
export class NewsFiltersComponent {
  @Output() formSubmit = new EventEmitter<NgForm>();
  @Output() public selected = new EventEmitter<any>();
  catTypes$: Observable<SelectType[]>;
  constructor(private sharedService: SharedService) {
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
  onSelected(e, f: NgForm) {
    f.controls['title'].setValue(e.title);
    this.onSubmit(f);
  }

}
