import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'danh-muc',
    loadChildren: () => import('src/app/products/products.module').then(mod => mod.ProductsModule)
  },
  {
    path: 'chi-tiet-san-pham',
    loadChildren: () => import('src/app/product-details/product-details.module').then(mod => mod.ProductDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
