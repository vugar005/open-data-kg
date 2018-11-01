import { Routes, RouterModule } from '@angular/router';
import { EntDictionariesComponent } from './ent-dictionaries.component';

const routes: Routes = [
  { path: '', component: EntDictionariesComponent}
];

export const EntDictionariesRoutes = RouterModule.forChild(routes);
