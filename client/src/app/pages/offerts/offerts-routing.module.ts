import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffertsComponent } from './offerts.component';

const routes: Routes = [
  {
    path: '',
    component: OffertsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffertsRouterModule {}
