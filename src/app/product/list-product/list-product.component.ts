import { Component, OnInit } from '@angular/core';
import { Product } from 'src/interface/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  productCollection:Product[] = []
  constructor(private productService:ProductService) {

   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.productService.getProduct().subscribe(data=>{
      this.productCollection = data
    })
  }

  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe(data => {
      this.getData();
    });
  }

}
