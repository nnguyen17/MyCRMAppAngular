import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Order } from 'src/interface/order';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  order:Order ={
    id: 0
  }
  addOrderForm:FormGroup;

  isSuccessful:boolean=false;

  constructor(private builder:FormBuilder, private orderService:OrderService) { 
    this.addOrderForm = builder.group({
      'orderId':new FormControl()
    });
  }

  ngOnInit(): void {
  }

  insertOrder(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
    form.reset();
  }

  saveOrder(){
    this.order.id = this.addOrderForm.value["orderId"]
    this.orderService.insertOrder(this.order).subscribe(data =>{
      this.isSuccessful=true;
    })
  }
}
