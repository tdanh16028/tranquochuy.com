import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { BoxContactComponent } from './components/box-contact/box-contact.component';
import { BoxFacebookComponent } from './components/box-facebook/box-facebook.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SliderComponent } from './components/slider/slider.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SlideshowComponent,
    ProductListComponent,
    ProductCardComponent,
    BoxContactComponent,
    BoxFacebookComponent,
    BreadcrumbComponent,
    PaginationComponent,
    SliderComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SlideshowComponent,
    ProductListComponent,
    BoxContactComponent,
    BoxFacebookComponent,
    BreadcrumbComponent,
    PaginationComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
