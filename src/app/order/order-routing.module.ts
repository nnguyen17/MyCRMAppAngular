import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddOrderComponent } from "./add-order/add-order.component";
import { ListOrderComponent } from "./list-order/list-order.component";

const routes:Routes=[
    {path:'add', component:AddOrderComponent},
    
    {path:'list', component:ListOrderComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class OrderRoutingModule{}