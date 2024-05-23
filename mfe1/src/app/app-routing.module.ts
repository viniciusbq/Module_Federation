import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { OrderModule } from '../app/order/order.module';

const routes: Routes = [
  {path: '' , loadChildren:()=> import('../app/order/order.module').then(m=>OrderModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
