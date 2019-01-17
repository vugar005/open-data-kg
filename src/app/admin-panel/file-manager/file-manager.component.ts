import { HttpClient } from '@angular/common/http';
import { FileManagerUploaderAdapter } from './file-manager-uploader.adapter';
import { UploadFileDialogComponent } from './../ent-users/user-insert-dialog/upload-file-dialog/upload-file-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {
  fileList;
  adapter = new FileManagerUploaderAdapter(this.http);
  constructor(private sharedService: SharedService, private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.getFileList();
  }
  getFileList() {
    this.http.post('api/get/DispatcherRest/api/post/getFileListForManager', {})
    .subscribe(res => this.fileList = res);
  }
  onFileAdd() {
   const ref = this.dialog.open(UploadFileDialogComponent, {data: {
     adapter: this.adapter
   }});
    ref.afterClosed().subscribe(res => {
      this.onFileAdded(res);
    });
  }
  onFileAdded(id: string) {
    console.log(id);
  }
}
