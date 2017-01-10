import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module'
  },
  {
    path: 'signup',
    loadChildren: './registration/registration.module'
  },
  {
    path: '**',
    redirectTo: ''
  }
]; 

export const routing = RouterModule.forRoot(appRoutes);
