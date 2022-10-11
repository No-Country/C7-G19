import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffertsComponent } from './offerts.component';
import { OffertsRouterModule } from './offerts-routing.module';

@NgModule({
  declarations: [OffertsComponent],
  imports: [CommonModule, OffertsRouterModule],
  exports: [OffertsComponent],
})
export class OffertsModule {}
