import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { ListShipperComponent } from './list-shipper/list-shipper.component';
import { ShipperRoutingModule } from './shipper-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ShipperService } from 'src/services/shipper.service';



@NgModule({
  declarations: [
    AddShipperComponent,
    ListShipperComponent
  ],
  imports: [
    CommonModule,
    ShipperRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ShipperService
  ]
  
})
export class ShipperModule { }
