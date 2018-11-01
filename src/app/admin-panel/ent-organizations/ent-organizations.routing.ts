import { Routes, RouterModule } from '@angular/router';
import { EntOrganizationsComponent } from './ent-organizations.component';

const routes: Routes = [
  {  path: '', component: EntOrganizationsComponent},
];

export const EntOrganizationsRoutes = RouterModule.forChild(routes);
