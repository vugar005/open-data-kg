import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { AdminGuard } from './auth/admin.guard';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppCustomPreloader } from './app-custom-preloader';
import { UserResolver } from './shared/resolvers/user.resolver';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { QuicklinkStrategy} from 'ngx-quicklink';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: { breadcrumb: 'Home', state: 'home'}, resolve: [UserResolver], children: [
    {path: '', component: LandingPageComponent, pathMatch: 'full', data: {state: 'landing-page', breadcrumb: ''}},
    {path: 'datasets', loadChildren: './datasets/datasets.module#DatasetsModule', data: {  breadcrumb: 'datasets'}},
    {path: 'news', loadChildren: './news/news.module#NewsModule',  data: {  breadcrumb: 'news'}},
    {path: 'blogs', loadChildren: './blog/blog.module#BlogModule'},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'announcements', loadChildren: './annoucements/announcements.module#AnnouncementsModule'},
  ]},
  {path: 'login', component: LoginComponent, data: {breadcrumb: 'login'}},
  {path: 'register', component: RegisterComponent },
   {path: 'admin', loadChildren: './admin-panel/admin-panel.module#AdminPanelModule'},
   {path: '404', component: NotFoundComponent},
 // {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: AppCustomPreloader})],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
