import {
  Directive,
  Input,
  HostListener,
  AfterViewInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TableUtilsService } from '../table-utils.service';
import { NgxNativeTableComponent } from '../native-table/native-table.component';

declare var Particles;
@Directive({
  selector: '[updateTableData]'
})
export class UpdateTableDataDirective implements AfterViewInit {
  @Input()
  form: NgForm;
  isLoading: boolean;
  @Input() addtionalFormData: any;
  @Input() table: NgxNativeTableComponent;
  @Output() onClose = new EventEmitter<Object>();
  particles: any;
  isParticlesComplete: boolean;
  @HostListener('click')
  onclick() {
  //  this.particles = new Particles(this.element.nativeElement, {
  //    complete: () => this.isParticlesComplete = true
  //  });
   this.tryUpdateTableData();
  }
  constructor(private element: ElementRef, private tableUtilsService: TableUtilsService) {}
  ngAfterViewInit() {}
  tryUpdateTableData() {
    if (!this.form) {
      return console.warn('form reference is not provided');
    }
    if (!this.table.config.updateApi) {
      return console.warn('update api is not provided');
    }
    if (this.isLoading) {
      return;
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
    console.log(this.form.value)
    this.updateTableData();
  }
  updateTableData() {
    this.isLoading = true;
    const data = {
      kv: {...this.form.value}
    };
    this.tableUtilsService
      .postTableData( this.table.config.updateApi, data, this.table)
      .subscribe(
        (res: any) => {
          this.isLoading = false;
          if (res && res.err && res.err.length > 0) {
            console.log('error on update');
            res.err.forEach(er => {
              Object.keys(this.form.controls).forEach(co => {
                if (co === er.code) {
                  this.form.controls[co].setErrors({ serverError: er.val });
                }
              });
            });
         //   this.particles.integrate();
          } else {
            this.onUpdateSuccess(res);
          }
        },
        er => {
          this.isLoading = false;
          console.log(er);
      //    this.particles.integrate();
        },
        () => (this.isLoading = false)
      );
  }
  onUpdateSuccess(res) {
   setTimeout(() => {
    this.table.tableService.getTableData$.next();
    this.onClose.next(res);
   }, 0);
  }
}
