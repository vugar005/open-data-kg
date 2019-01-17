import { FileManagerRoutes } from './file-manager.routing';
import { FileItemComponent } from './file-list/file-item/file-item.component';
import { FileListComponent } from './file-list/file-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from './file-manager.component';
import { SharedAdminModule } from '../shared/shared-admin.module';

@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    FileManagerRoutes
  ],
  declarations: [
    FileManagerComponent,
    FileListComponent,
    FileItemComponent
  ]
})
export class FileManagerModule { }
