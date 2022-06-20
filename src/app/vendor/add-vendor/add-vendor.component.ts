import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vendor } from 'src/interface/vendor';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {
vendor:Vendor ={
  name: '',
  city: '',
  country: '',
  mobile: '',
  email: '',
  isActive: false
}
  constructor() { }

  ngOnInit(): void {
  }

  insertVendor(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
form.reset();
  }
}
