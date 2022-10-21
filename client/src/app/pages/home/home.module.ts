import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home-page/home.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { PrimeModule } from '../../prime/prime.module';

@NgModule({
  declarations: [HomeComponent, ProductComponent, ProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    PrimeModule,
  ],
  exports: [ProductsComponent, ProductComponent],
})
export class HomeModule {}
