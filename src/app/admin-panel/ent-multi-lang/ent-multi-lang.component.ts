import { MultiLangInsertComponent } from './multi-lang-insert/multi-lang-insert.component';
import { Component, ViewChild } from '@angular/core';
import { SharedAdminService } from '../shared/shared-admin.service';
import { TableEditerAction, NgxNativeTableComponent, ApiConfig } from 'ngx-native-table';

@Component({
  selector: 'ent-multi-lang',
  templateUrl: './ent-multi-lang.component.html',
  styleUrls: ['./ent-multi-lang.component.scss']
})
export class EntMultiLangComponent  {
  @ViewChild('table') table: NgxNativeTableComponent;
  config: ApiConfig = {
    getApi: 'api/post/Permission/Multilang/GetMultilangList',
    insertApi: 'api/post/Permission/Multilang/InsertNewMultilang',
    updateApi: 'api/post/Permission/Multilang/UpdateMultilang',
    deleteApi: 'api/post/Permission/Multilang/DeleteMultilang'
  };
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, MultiLangInsertComponent);
   }

}
