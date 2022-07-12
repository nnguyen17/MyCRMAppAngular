import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Customer } from 'src/interface/customer';
import { CustomerService } from 'src/services/customer.service';

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
  regionId: 0,
  postalCode: 0,
  country: '',
  phone: '',
  id: 0
}
  
  addCustomerForm:FormGroup;

  isSuccessful:boolean=false;

constructor(private builder:FormBuilder, private customerService:CustomerService) { 
  this.addCustomerForm = builder.group({
    'customerName':new FormControl(),
    'customerTitle':new FormControl(),
    'customerAddress':new FormControl(),
    'customerCity':new FormControl(),
    'customerRegion':new FormControl(),
    'customerPostalCode':new FormControl(),
    'customerCountry':new FormControl(),
    'customerPhone':new FormControl()
  });
}

  ngOnInit(): void {
  }

  insertCustomer(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
    form.reset();
  }

  saveCustomer(){
    this.customer.name = this.addCustomerForm.value["customerName"]
    this.customer.title = this.addCustomerForm.value["customerTitle"]
    this.customer.address = this.addCustomerForm.value["customerAddress"]
    this.customer.city = this.addCustomerForm.value["customerCity"]
    this.customer.regionId = this.addCustomerForm.value["customerRegion"]
    this.customer.postalCode = this.addCustomerForm.value["customerPostalCode"]
    this.customer.country = this.addCustomerForm.value["customerCountry"]
    this.customer.phone = this.addCustomerForm.value["customerPhone"]
    this.customerService.insertCustomer(this.customer).subscribe(data =>{
      this.isSuccessful=true;
    })
  }

}
