import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { AnnouncementItemComponent } from './announcement-list/announcement-item/announcement-item.component';
import { AnnouncementsRoutes } from './announcements.routing';
import { SharedModule } from '../shared/shared.module';
import { AnnouncementsComponent } from './announcements.component';

@NgModule({
  imports: [
    CommonModule,
    AnnouncementsRoutes,
    SharedModule
  ],
  declarations: [
    AnnouncementsComponent,
    AnnouncementListComponent,
    AnnouncementItemComponent
  ]
})
export class AnnouncementsModule { }
