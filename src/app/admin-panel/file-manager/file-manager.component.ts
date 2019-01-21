import { FileManagerItem } from './file-manager-item.model';
import { HttpClient } from '@angular/common/http';
import { FileManagerUploaderAdapter } from './file-manager-uploader.adapter';
import { UploadFileDialogComponent } from './../ent-users/user-insert-dialog/upload-file-dialog/upload-file-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {
  @Output() selected = new EventEmitter<FileManagerItem>();
  items: FileManagerItem[];
  adapter = new FileManagerUploaderAdapter(this.http);
  constructor(private sharedService: SharedService, private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.getFileList();
  }
  getFileList() {
    this.http.post('api/post/getFileListForManager', {})
    .subscribe((res: any) => this.items = res.data);
  }
  onFileAdd() {
   const ref = this.dialog.open(UploadFileDialogComponent, {data: {
     adapter: this.adapter
   }});
    ref.afterClosed().subscribe(res => {
      this.onFileAdded(res);
    });
  }
  onFileRemove(id: string) {
    const removeApi = `api/post/file/${id}/remove`;
    this.http.post(removeApi, {}).subscribe((res) => this.getFileList());
  }
  onFileAdded(id: string) {
    console.log(id);
    this.getFileList();
  }
}
