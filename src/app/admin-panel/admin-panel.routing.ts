import { AppCustomPreloader } from './../app-custom-preloader';
import { delay } from 'rxjs/operators';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminGuard } from '../auth/admin.guard';

const routes: Routes = [
  {path: '', component: AdminPanelComponent, children: [
    {path: 'modules', loadChildren: './ent-modules/ent-modules.module#EntModulesModule'},
    {path: 'applications', loadChildren: './ent-applications/ent-applications.module#EntApplicationsModule'},
    {path: 'operations', loadChildren: './ent-operations/ent-operations.module#EntOperationsModule'},
    {path: 'users', loadChildren: './ent-users/ent-users.module#EntUsersModule'},
    {path: 'user-roles', loadChildren: './admin-user-roles/admin-user-roles.module#AdminUserRolesModule'},
    {path: 'dictionaries', loadChildren: './ent-dictionaries/ent-dictionaries.module#EntDictionariesModule'},
    {path: 'dictionary-types', loadChildren: './ent-dictionary-types/ent-dictionary-types.module#EntDictionaryTypesModule'},
    {path: 'organizations', loadChildren: './ent-organizations/ent-organizations.module#EntOrganizationsModule'},
    {path: 'datasets', loadChildren: './ent-datasets/ent-datasets.module#EntDatasetsModule'},
    {path: 'comments', loadChildren: './ent-comments/ent-comments.module#EntCommentsModule'},
    {path: 'news', loadChildren: './ent-news/ent-news.module#EntNewsModule'},
    {path: 'blogs', loadChildren: './ent-blogs/ent-blogs.module#EntBlogsModule'},
   // {path: 'annoucements', loadChildren: './ent-annoucements/ent-annoucements.module#EntAnnoucementsModule'},
  ]},
];

export const AdminPanelRoutes = RouterModule.forChild(routes);
//    path: '', loadChildren: './ent-modules/ent-modules.module#EntModulesModule'
