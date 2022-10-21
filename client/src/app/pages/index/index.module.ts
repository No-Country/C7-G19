import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, IndexRoutingModule, MaterialModule],
})
export class IndexModule {}
