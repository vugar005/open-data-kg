import { AnnouncementInsertComponent } from './announcement-insert/announcement-insert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntAnnoucementsComponent } from './ent-annoucements.component';
import { SharedAdminModule } from '../shared/shared-admin.module';
import { EntAnnoucementsRoutes } from './ent-annoucements.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedAdminModule,
    EntAnnoucementsRoutes
  ],
  declarations: [EntAnnoucementsComponent, AnnouncementInsertComponent],
  entryComponents: [AnnouncementInsertComponent]
})
export class EntAnnoucementsModule { }
