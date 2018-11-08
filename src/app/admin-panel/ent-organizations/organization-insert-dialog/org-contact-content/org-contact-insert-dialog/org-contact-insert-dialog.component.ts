import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgxFormUtils } from 'ngx-form-utils';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-org-contact-insert-dialog',
  templateUrl: './org-contact-insert-dialog.component.html',
  styleUrls: ['./org-contact-insert-dialog.component.scss']
})
export class OrgContactInsertDialogComponent {
  @ViewChild('f') ntForm: NgForm;
  types$: Observable<SelectType[]>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<OrgContactInsertDialogComponent>,
    public viewRef: ViewContainerRef,
    private sharedService: SharedService
  ) {
    this.types$ = this.sharedService.getTypes('181110214600956271');
  }
  getErrors(str) {
    if (!this.ntForm || !NgxFormUtils) { return; }
     return NgxFormUtils.getErrors(this.ntForm, str);
    }

}
