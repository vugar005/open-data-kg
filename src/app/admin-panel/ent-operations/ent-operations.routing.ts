import { Routes, RouterModule } from '@angular/router';
import { EntOperationsComponent } from './ent-operations.component';

const routes: Routes = [
  { path: '', component: EntOperationsComponent }
];

export const EntOperationsRoutes = RouterModule.forChild(routes);
