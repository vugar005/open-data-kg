import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminGuard } from './auth/admin.guard';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DatasetDetailComponent } from './shared/components/dataset-detail/dataset-detail.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'categories', redirectTo: 'categories/0', pathMatch: 'full'},
  {path: 'organizations', redirectTo: 'organizations/0', pathMatch: 'full'},
  {path: 'categories/:id', loadChildren: './categories/categories.module#CategoriesModule'},
  {path: 'organizations/:id', loadChildren: './organizations/organizations.module#OrganizationsModule'},
  {path: 'datasets/:id', component: DatasetDetailComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'admin', loadChildren: './admin-panel/admin-panel.module#AdminPanelModule', canActivate: [AdminGuard]},
  {path: 'news', loadChildren: './news/news.module#NewsModule'},
  {path: 'blogs', loadChildren: './blog/blog.module#BlogModule'},
  {path: 'announcements', loadChildren: './annoucements/announcements.module#AnnouncementsModule'},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
