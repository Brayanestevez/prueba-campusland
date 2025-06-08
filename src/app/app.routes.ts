
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./product-list/product-list').then(m => m.ProductListComponent),
  },
  {
    path: 'new',
    loadComponent: () => import('./product-form/product-form').then(m => m.ProductFormComponent),
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./product-form/product-form').then(m => m.ProductFormComponent),
  },
  
    {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'

  }
];
