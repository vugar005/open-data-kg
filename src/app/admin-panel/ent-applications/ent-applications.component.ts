import { SharedAdminService } from './../shared/shared-admin.service';
import { Component} from '@angular/core';
import { ApplicationsInsertDialogComponent } from './applications-insert-dialog/applications-insert-dialog.component';
import { ApiConfig } from 'nt-table/lib/api-config.model';
import { TableEditerAction } from 'ngx-native-table/table-action.model';
import { NgxNativeTableComponent } from 'ngx-native-table';

@Component({
  selector: 'ent-applications',
  templateUrl: './ent-applications.component.html',
  styleUrls: ['./ent-applications.component.scss']
})
export class EntApplicationsComponent  {
  config: ApiConfig = {
    getApi: 'api/post/Permission/Applications/GetApplicationList',
    insertApi: 'api/post/Permission/Applications/InsertNewApplication',
    updateApi: 'api/post/Permission/Applications/UpdateApplication',
    deleteApi: 'api/post/Permission/Applications/DeleteApplication',
  };
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, ApplicationsInsertDialogComponent);
   }
}
