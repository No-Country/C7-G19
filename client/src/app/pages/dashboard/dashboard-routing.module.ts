import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard-page/dashboard.component';
import { DashMainComponent } from './components/dash-main/dash-main.component';
import { DashSellComponent } from './components/dash-sell/dash-sell.component';
import { DashAccountComponent } from './components/dash-account/dash-account.component';
import { DashMsgComponent } from './components/dash-msg/dash-msg.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashMainComponent,
      },
      { path: 'sell', component: DashSellComponent },
      { path: 'account', component: DashAccountComponent },
      { path: 'messages', component: DashMsgComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
