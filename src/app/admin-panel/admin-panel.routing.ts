import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: './ent-modules/ent-modules.module#EntModulesModule'
   },
];

export const AdminPanelRoutes = RouterModule.forChild(routes);
