import { Routes, RouterModule } from '@angular/router';
import { EntMultiLangComponent } from './ent-multi-lang.component';

const routes: Routes = [
  {path: '', component: EntMultiLangComponent},
];

export const EntMultiLangRoutes = RouterModule.forChild(routes);
