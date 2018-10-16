import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
  {path: '', component: AdminPanelComponent, children: [
    {path: '', loadChildren: './ent-modules/ent-modules.module#EntModulesModule'},
    {path: 'modules', loadChildren: './ent-modules/ent-modules.module#EntModulesModule'}
  ]},
];

export const AdminPanelRoutes = RouterModule.forChild(routes);
//    path: '', loadChildren: './ent-modules/ent-modules.module#EntModulesModule'
