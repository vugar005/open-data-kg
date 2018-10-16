import { Routes, RouterModule } from '@angular/router';
import { EntModulesComponent } from './ent-modules.component';

const routes: Routes = [
  { path: '', component: EntModulesComponent} ,
];

export const EntModulesRoutes = RouterModule.forChild(routes);
