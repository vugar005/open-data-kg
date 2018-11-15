import { Component, OnInit, ViewChild, Inject, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { SelectType } from 'src/app/shared/models/select-type.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SharedService } from 'src/app/shared/shared.service';
import { NgxFormUtils } from 'ngx-form-utils';

@Component({
  selector: 'app-org-contact-insert',
  templateUrl: './org-contact-insert.component.html',
  styleUrls: ['./org-contact-insert.component.scss']
})
export class OrgContactInsertComponent {
  @ViewChild('f') ntForm: NgForm;
  types$: Observable<SelectType[]>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<OrgContactInsertComponent>,
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
