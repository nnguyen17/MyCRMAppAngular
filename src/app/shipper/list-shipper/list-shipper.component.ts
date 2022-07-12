import { Component, OnInit } from '@angular/core';
import { Shipper } from 'src/interface/shipper';
import { ShipperService } from 'src/services/shipper.service';

@Component({
  selector: 'app-list-shipper',
  templateUrl: './list-shipper.component.html',
  styleUrls: ['./list-shipper.component.scss']
})
export class ListShipperComponent implements OnInit {

  shipperCollection:Shipper[] = []
  constructor(private shipperService:ShipperService) {

   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.shipperService.getShipper().subscribe(data=>{
      this.shipperCollection = data
    })
  }

  deleteShipper(id:any){
    this.shipperService.deleteShipper(id).subscribe(data => {
      this.getData();
    });
  }

}
