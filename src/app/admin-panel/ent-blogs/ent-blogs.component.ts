import { BlogInsertComponent } from './blog-insert/blog-insert.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiConfig } from 'nt-table/lib/api-config.model';
import { NtTableComponent } from 'nt-table';
import { MatDialog } from '@angular/material';

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
  @ViewChild('table') table: NtTableComponent;
  constructor(private dialog: MatDialog) {
  }
  initDialog(table, row = null) {
    const ref = this.dialog.open(BlogInsertComponent, {
      data: { table: table, row: row || undefined}
    });
  }
}
