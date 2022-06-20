import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrderComponent } from './add-order/add-order.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { OrderRoutingModule } from './order-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddOrderComponent,
    ListOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule
  ]
})
export class OrderModule { }
