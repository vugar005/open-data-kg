import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'admin', loadChildren: './admin-panel/admin-panel.module#AdminPanelModule'},
  {path: 'news', loadChildren: './news/news.module#NewsModule'},
  {path: 'blogs', loadChildren: './blog/blog.module#BlogModule'},
  {path: 'announcements', loadChildren: './annoucements/announcements.module#AnnouncementsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
