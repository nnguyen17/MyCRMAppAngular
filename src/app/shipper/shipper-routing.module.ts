import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddShipperComponent } from "./add-shipper/add-shipper.component";
import { ListShipperComponent } from "./list-shipper/list-shipper.component";

const routes:Routes=[
    {path:'add', component:AddShipperComponent},
    
    {path:'list', component:ListShipperComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class ShipperRoutingModule{}