import { Routes, RouterModule } from '@angular/router';
import { EntDictionaryTypesComponent } from './ent-dictionary-types.component';

const routes: Routes = [
  { path: '', component: EntDictionaryTypesComponent}
];

export const EntDictionaryTypesRoutes = RouterModule.forChild(routes);
