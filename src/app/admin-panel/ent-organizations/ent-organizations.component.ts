import { Component, ViewChild } from '@angular/core';
import { OrganizationInsertDialogComponent } from './organization-insert-dialog/organization-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

@Component({
  selector: 'ent-organizations',
  templateUrl: './ent-organizations.component.html',
  styleUrls: ['./ent-organizations.component.scss']
})
export class EntOrganizationsComponent {
  @ViewChild('table') table: NgxNativeTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/Organizations/GetOrganizationList',
    insertApi: 'api/post/Permission/Organizations/InsertNewOrganization',
    updateApi: 'api/post/Permission/Organizations/UpdateOrganization',
    deleteApi: 'api/post/Permission/Organizations/DeleteOrganization'
  };
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, OrganizationInsertDialogComponent);
   }

}
