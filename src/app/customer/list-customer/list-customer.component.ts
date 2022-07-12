import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/interface/customer';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  customerCollection:Customer[] = []
  constructor(private customerService:CustomerService) {

   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.customerService.getCustomer().subscribe(data=>{
      this.customerCollection = data
    })
  }

  deleteCustomer(id:any){
    this.customerService.deleteCustomer(id).subscribe(data => {
      this.getData();
    });
  }

}
