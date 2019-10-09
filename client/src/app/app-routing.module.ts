import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'san-pham',
    loadChildren: () => import('src/app/products/products.module').then(mod => mod.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
