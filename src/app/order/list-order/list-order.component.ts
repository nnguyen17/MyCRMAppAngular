import { Component, OnInit } from '@angular/core';
import { Order } from 'src/interface/order';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

  orderCollection:Order[] = []
  constructor(private orderService:OrderService) {

   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.orderService.getOrder().subscribe(data=>{
      this.orderCollection = data
    })
  }

  deleteOrder(id:any){
    this.orderService.deleteOrder(id).subscribe(data => {
      this.getData();
    });
  }
}
