import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/interface/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
customer:Customer ={
  name: '',
  title: '',
  address: '',
  city: '',
  region: 0,
  postalCode: 0,
  country: '',
  phone: ''
}
  constructor() { }

  ngOnInit(): void {
  }

  insertCustomer(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
form.reset();
  }
}
