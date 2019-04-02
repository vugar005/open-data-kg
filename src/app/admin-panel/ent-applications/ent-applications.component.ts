import { Component, ViewChild} from '@angular/core';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { ApplicationsInsertDialogComponent } from './applications-insert-dialog/applications-insert-dialog.component';

@Component({
  selector: 'ent-applications',
  templateUrl: './ent-applications.component.html',
  styleUrls: ['./ent-applications.component.scss']
})
export class EntApplicationsComponent  {
  @ViewChild('table') table: NgxNativeTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/Applications/GetApplicationList',
    insertApi: 'api/post/Permission/Applications/InsertNewApplication',
    updateApi: 'api/post/Permission/Applications/UpdateApplication',
    deleteApi: 'api/post/Permission/Applications/DeleteApplication',
  };
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, ApplicationsInsertDialogComponent);
   }
}
