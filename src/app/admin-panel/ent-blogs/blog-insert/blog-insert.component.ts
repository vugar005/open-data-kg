import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SharedService } from 'src/app/shared/shared.service';
import { NgxFormUtils } from 'ngx-form-utils';

@Component({
  selector: 'app-blog-insert',
  templateUrl: './blog-insert.component.html',
  styleUrls: ['./blog-insert.component.scss']
})
export class BlogInsertComponent {
  cats$: Observable<any>;
  @ViewChild('f') ntForm: NgForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BlogInsertComponent>,
    private sharedService: SharedService
  ) {
    this.cats$ = this.sharedService.getTypes('1000008');

  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }

}
