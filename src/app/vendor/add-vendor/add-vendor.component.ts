import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Vendor } from 'src/interface/vendor';
import { VendorService } from 'src/services/vendor.service';

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
  emailId: '',
  isActive: false,
  id: 0
}

  addVendorForm:FormGroup;

  isSuccessful:boolean=false;

  constructor(private builder:FormBuilder, private vendorService:VendorService) { 
    this.addVendorForm = builder.group({
      'vendorName':new FormControl(),
      'vendorCity':new FormControl(),
      'vendorCountry':new FormControl(),
      'vendorMobile':new FormControl(),
      'vendorEmailId':new FormControl(),
      'vendorIsActive':new FormControl()
    });
  }

  ngOnInit(): void {
  }

  insertVendor(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
    form.reset();
  }

  saveVendor(){
    this.vendor.name = this.addVendorForm.value["vendorName"]
    this.vendor.city = this.addVendorForm.value["vendorCity"]
    this.vendor.country = this.addVendorForm.value["vendorCountry"]
    this.vendor.mobile = this.addVendorForm.value["vendorMobile"]
    this.vendor.emailId = this.addVendorForm.value["vendorEmailId"]
    let d = this.addVendorForm.value["vendorIsActive"]
    if(d =="1"){
      this.vendor.isActive = true
    }
    if(d =="0"){
      this.vendor.isActive = false
    }
    this.vendorService.insertVendor(this.vendor).subscribe(data =>{
      this.isSuccessful=true;
    })
  }
}
