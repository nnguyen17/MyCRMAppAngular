import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    AddProductComponent,
    ListProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ProductService
  ]
  
})
export class ProductModule { }
