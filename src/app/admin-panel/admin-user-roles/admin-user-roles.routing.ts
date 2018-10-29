import { Routes, RouterModule } from '@angular/router';
import { AdminUserRolesComponent } from './admin-user-roles.component';

const routes: Routes = [
  { path: '', component: AdminUserRolesComponent} ,
];

export const AdminUserRolesRoutes = RouterModule.forChild(routes);
