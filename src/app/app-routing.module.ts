import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminGuard } from './auth/admin.guard';
import { CategoryOverviewComponent } from './global-nav/category-overview/category-overview.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent, children: [
    {path: '', component: CategoryOverviewComponent, pathMatch: 'full'}
  ]},
  {path: 'categories/:id', loadChildren: './categories/categories.module#CategoriesModule'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'admin', loadChildren: './admin-panel/admin-panel.module#AdminPanelModule', canActivate: [AdminGuard]},
  {path: 'news', loadChildren: './news/news.module#NewsModule'},
  {path: 'blogs', loadChildren: './blog/blog.module#BlogModule'},
  {path: 'announcements', loadChildren: './annoucements/announcements.module#AnnouncementsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
