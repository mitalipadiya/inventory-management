import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksManagementComponent } from './components/stocks-management/stocks-management.component';

const routes: Routes = [
  {
    path: '',
    component: StocksManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
