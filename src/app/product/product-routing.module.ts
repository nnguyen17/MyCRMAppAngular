import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ListProductComponent } from "./list-product/list-product.component";

const routes:Routes=[
    {path:'add', component:AddProductComponent},
    
    {path:'list', component:ListProductComponent},

    {path:'edit/:id', component:EditProductComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class ProductRoutingModule{}