import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule],
  exports: [FooterComponent, HeaderComponent],
})
export class SharedModule { }
