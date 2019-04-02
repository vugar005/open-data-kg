import { MultiLangInsertComponent } from './multi-lang-insert/multi-lang-insert.component';
import { Component, ViewChild } from '@angular/core';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

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
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, MultiLangInsertComponent);
   }

}
