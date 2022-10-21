import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffertsComponent } from './offerts.component';
import { OffertsRouterModule } from './offerts-routing.module';
import { MaterialModule } from '../../material/material.module';
import { HomeModule } from '../home/home.module';
import { PrimeModule } from '../../prime/prime.module';

@NgModule({
  declarations: [OffertsComponent],
  imports: [
    CommonModule,
    OffertsRouterModule,
    MaterialModule,
    HomeModule,
    PrimeModule,
  ],
  exports: [OffertsComponent],
})
export class OffertsModule {}
