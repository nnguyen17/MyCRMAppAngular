import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Product } from 'src/interface/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
product:Product ={
  name: '',
  vendorId: 0,
  categoryId: 0,
  quantityPerUnit: 0,
  unitPrice: 0,
  unitsInStock: 0,
  unitsOnOrder: 0,
  reorderLevel: 0,
  discontinued: false,
  id: 0
}
  addProductForm:FormGroup;

  isSuccessful:boolean=false;

  constructor(private builder:FormBuilder, private productService:ProductService) { 
    this.addProductForm = builder.group({
      'productName':new FormControl(),
      'productVendorId':new FormControl(),
      'productCategoryId':new FormControl(),
      'productQuantityPerUnit':new FormControl(),
      'productUnitPrice':new FormControl(),
      'productUnitsInStock':new FormControl(),
      'productUnitsOnOrder':new FormControl(),
      'productReorderLevel':new FormControl(),
      'productDiscontinued':new FormControl()
    });
  }

  ngOnInit(): void {
  }

  insertProduct(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
    form.reset();
  }

  saveProduct(){
    this.product.name = this.addProductForm.value["productName"]
    this.product.vendorId = this.addProductForm.value["productVendorId"]
    this.product.categoryId = this.addProductForm.value["productCategoryId"]
    this.product.quantityPerUnit = this.addProductForm.value["productQuantityPerUnit"]
    this.product.unitPrice = this.addProductForm.value["productUnitPrice"]
    this.product.unitsInStock = this.addProductForm.value["productUnitsInStock"]
    this.product.unitsOnOrder = this.addProductForm.value["productUnitsOnOrder"]
    this.product.reorderLevel = this.addProductForm.value["productReorderLevel"]
    let d = this.addProductForm.value["productDiscontinued"]
    if(d=="1"){
      this.product.discontinued = true
    }
    if(d=="0"){
      this.product.discontinued = false
    }
    this.productService.insertProduct(this.product).subscribe(data =>{
      this.isSuccessful=true;
    })
  }

}
