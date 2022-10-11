import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../../material/material.module';
import { DashboardComponent } from './components/dashboard-page/dashboard.component';
import { DashSellComponent } from './components/dash-sell/dash-sell.component';
import { DashAccountComponent } from './components/dash-account/dash-account.component';
import { DashMsgComponent } from './components/dash-msg/dash-msg.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashSellComponent,
    DashAccountComponent,
    DashMsgComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule],
})
export class DashboardModule {}
