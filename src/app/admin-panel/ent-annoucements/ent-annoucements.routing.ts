import { Routes, RouterModule } from '@angular/router';
import { EntAnnoucementsComponent } from './ent-annoucements.component';

const routes: Routes = [
  {  path: '', component: EntAnnoucementsComponent},
];

export const EntAnnoucementsRoutes = RouterModule.forChild(routes);
