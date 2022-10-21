import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';

import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [CommonModule, CarouselModule, CheckboxModule],
  exports: [CarouselModule, CheckboxModule],
})
export class PrimeModule {}
