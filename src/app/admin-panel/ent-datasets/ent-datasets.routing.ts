import { Routes, RouterModule } from '@angular/router';
import { EntDatasetsComponent } from './ent-datasets.component';

const routes: Routes = [
  {  path: '', component: EntDatasetsComponent},
];

export const EntDatasetsRoutes = RouterModule.forChild(routes);
