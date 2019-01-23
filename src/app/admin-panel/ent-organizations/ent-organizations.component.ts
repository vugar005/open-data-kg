import { Component, ViewChild } from '@angular/core';
import { OrganizationInsertDialogComponent } from './organization-insert-dialog/organization-insert-dialog.component';
import { SharedAdminService } from '../shared/shared-admin.service';
import { TableEditerAction, NgxNativeTableComponent, ApiConfig } from 'ngx-native-table';

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
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, OrganizationInsertDialogComponent);
   }

}
