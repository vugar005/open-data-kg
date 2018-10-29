import { Routes, RouterModule } from '@angular/router';
import { EntUsersComponent } from './ent-users.component';

const routes: Routes = [
  { path: '', component: EntUsersComponent} ,
];

export const EntUsersRoutes = RouterModule.forChild(routes);
