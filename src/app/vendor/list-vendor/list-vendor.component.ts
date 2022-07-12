import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/interface/vendor';
import { VendorService } from 'src/services/vendor.service';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.scss']
})
export class ListVendorComponent implements OnInit {

  vendorCollection:Vendor[] = []
  constructor(private vendorService:VendorService) {

   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.vendorService.getVendor().subscribe(data=>{
      this.vendorCollection = data
    })
  }

  deleteVendor(id:any){
    this.vendorService.deleteVendor(id).subscribe(data => {
      this.getData();
    });
  }

}
