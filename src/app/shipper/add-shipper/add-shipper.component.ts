import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shipper } from 'src/interface/shipper';

@Component({
  selector: 'app-add-shipper',
  templateUrl: './add-shipper.component.html',
  styleUrls: ['./add-shipper.component.scss']
})
export class AddShipperComponent implements OnInit {
shipper:Shipper ={
  name: '',
  phone: ''
}
  constructor() { }

  ngOnInit(): void {
  }

  insertShipper(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
form.reset();
  }
}
