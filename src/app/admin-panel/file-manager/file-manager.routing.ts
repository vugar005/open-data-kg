import { Routes, RouterModule } from '@angular/router';
import { FileManagerComponent } from './file-manager.component';

const routes: Routes = [
  { path: '', component: FileManagerComponent },
];

export const FileManagerRoutes = RouterModule.forChild(routes);
