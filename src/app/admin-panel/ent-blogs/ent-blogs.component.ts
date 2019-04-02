import { BlogInsertComponent } from './blog-insert/blog-insert.component';
import { Component, ViewChild } from '@angular/core';
import { NgxNativeTableComponent } from 'src/app/shared/table-utils/native-table/native-table.component';
import { ApiConfig } from 'src/app/shared/table-utils/native-table/api-config.model';
import { TableEditerAction } from 'src/app/shared/table-utils/native-table/table-action.model';
import { TableUtilsService } from 'src/app/shared/table-utils/table-utils.service';

@Component({
  selector: 'app-ent-blogs',
  templateUrl: './ent-blogs.component.html',
  styleUrls: ['./ent-blogs.component.scss']
})
export class EntBlogsComponent  {
  config: ApiConfig = {
    getApi: 'api/post/Permission/Sharing/GetBlogList',
    insertApi: 'api/post/Permission/Sharing/InsertNewBlog',
    updateApi: 'api/post/Permission/Sharing/UpdateBlog',
    deleteApi: 'api/post/Permission/Sharing/DeleteBlog',
    confirmApi: 'api/post/Permission/Sharing/ConfirmBlog',
    unConfirmApi: 'api/post/Permission/Sharing/UnconfirmBlog'
  };
  @ViewChild('table') table: NgxNativeTableComponent;
  constructor(private tableUtilsService: TableUtilsService) { }
  onOptClick(action: TableEditerAction) {
    this.tableUtilsService.tableActionImplement(action, this.table, BlogInsertComponent);
   }
}
