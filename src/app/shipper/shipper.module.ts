import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { ListShipperComponent } from './list-shipper/list-shipper.component';
import { ShipperRoutingModule } from './shipper-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddShipperComponent,
    ListShipperComponent
  ],
  imports: [
    CommonModule,
    ShipperRoutingModule,
    FormsModule
  ]
})
export class ShipperModule { }
