import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductDetailsRoutingModule} from './product-details-routing.module';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {ProductRelatedComponent} from './components/product-related/product-related.component';
import {SharedModule} from '../shared/shared.module';
import { ProductRelatedCardComponent } from './components/product-related-card/product-related-card.component';


@NgModule({
  declarations: [ProductDetailsComponent, ProductRelatedComponent, ProductRelatedCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductDetailsRoutingModule
  ]
})
export class ProductDetailsModule {
}
