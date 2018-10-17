import { Routes, RouterModule } from '@angular/router';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';

const routes: Routes = [
  {
    path: '', component: AnnouncementListComponent
   },
];

export const AnnouncementsRoutes = RouterModule.forChild(routes);
