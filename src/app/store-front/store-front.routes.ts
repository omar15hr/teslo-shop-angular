import { Routes } from '@angular/router';
import { StoreFrontLayoutComponent } from './layouts/store-front-layout/store-front-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';

export const storeFrontRoutes: Routes = [
  {
    path: '',
    component: StoreFrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'category/:category',
        component: CategoryPageComponent,
      },
      {
        path: 'product/:id',
        component: ProductPageComponent,
      },
      {
        path: '**',
        component: NotFoundPageComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default storeFrontRoutes;
