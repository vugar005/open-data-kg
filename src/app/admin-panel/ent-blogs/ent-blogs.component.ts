import { BlogInsertComponent } from './blog-insert/blog-insert.component';
import { Component, ViewChild } from '@angular/core';
import { SharedAdminService } from '../shared/shared-admin.service';
import { TableEditerAction, ApiConfig } from 'ngx-native-table';
import { NgxNativeTableComponent } from 'ngx-native-table';

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
  constructor(private sharedAdminService: SharedAdminService) { }
  onOptClick(action: TableEditerAction, table: NgxNativeTableComponent) {
    this.sharedAdminService.tableActionImplement(action, table, BlogInsertComponent);
   }
}
