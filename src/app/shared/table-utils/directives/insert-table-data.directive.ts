import {
  Directive,
  HostListener,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TableUtilsService } from '../table-utils.service';
import { NgxNativeTableComponent } from '../native-table/native-table.component';

@Directive({
  selector: '[insertTableData]'
})
export class InsertTableDataDirective implements AfterViewInit, OnChanges {
  @Input() table: NgxNativeTableComponent;
  @Input()
  form: NgForm;
  @Input()
  url: string;
  isLoading: boolean;
  @Input() addtionalFormData: any;
  @Output()
  onClose = new EventEmitter<Object>();
  @HostListener('click')
  onclick() {
    this.tryInsertTableData();
  }
  constructor(private tableUtilsService: TableUtilsService){}
  isValid() {
    console.log(this.form && !this.form.valid);
    //    this.disabled = this.form && !this.form.valid;
  }
  ngAfterViewInit() {}
  ngOnChanges(changes: SimpleChanges) {
    this.form = changes['form'].currentValue;
  }

  tryInsertTableData() {
    console.log('tryInsertData');
    if (!this.form) {
      return console.warn('form reference is not provided');
    }
    if (!this.table.config.insertApi) {
      return console.warn('insert api is not provided');
    }
    Object.keys(this.form.controls)
      .map(controlName => this.form.controls[controlName])
      .forEach((control: any) => {
        control.markAsDirty();
      });
    if (!this.form.valid) {
      return;
    }
    if (this.isLoading) {
      return;
    }
    this.insertTableData();
  }
  insertTableData() {
    this.isLoading = true;
    const data = {
      kv: {...this.form.value}
    };
    this.tableUtilsService
      .postTableData( this.table.config.insertApi, data, this.table)
      .subscribe(
        (res: any) => {
          if (res && res.err && res.err.length > 0) {
            console.log('error on insert');
            res.err.forEach(er => {
              Object.keys(this.form.controls).forEach(co => {
                if (co === er.code) {
                  this.form.controls[co].setErrors({ serverError: er.val });
                }
              });
            });
          } else {
            this.table.tableService.getTableData$.next();
            this.onClose.next(res);
          }
        },
        er => {
          this.isLoading = false;
          console.log(er);
        },
        () => (this.isLoading = false)
      );
  }
}
