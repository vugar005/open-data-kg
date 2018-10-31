import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'checkbox-renderer',
  template: `
  <mat-checkbox (change)="onCheckboxChange($event)" [checked]="this.params.node.data.checked"></mat-checkbox>
  `,
  styles: [
    ``
  ]
})
export class CheckboxRendererComponent implements ICellRendererAngularComp {
  public params: any;
   iconUrl = 'https://cdn4.iconfinder.com/data/icons/ui-actions/20/gears_cogs-512.png';
  agInit(params: any): void {
    this.params = params;
  }

  public onCheckboxChange(e) {
    const dtObject = {
      row: this.params.node.data,
      checked: e.checked
    };
     this.params.context.componentParent.onCheckChange(dtObject);
  }

  refresh(): boolean {
    return false;
  }
}
