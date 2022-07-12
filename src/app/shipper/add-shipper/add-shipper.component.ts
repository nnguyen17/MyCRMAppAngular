import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Shipper } from 'src/interface/shipper';
import { ShipperService } from 'src/services/shipper.service';

@Component({
  selector: 'app-add-shipper',
  templateUrl: './add-shipper.component.html',
  styleUrls: ['./add-shipper.component.scss']
})
export class AddShipperComponent implements OnInit {
shipper:Shipper ={
  name: '',
  phone: '',
  id: 0
}

  addShipperForm:FormGroup;

  isSuccessful:boolean=false;

  constructor(private builder:FormBuilder, private shipperService:ShipperService) { 
    this.addShipperForm = builder.group({
      'shipperName':new FormControl(),
      'shipperPhone':new FormControl()
    });
  }

  ngOnInit(): void {
  }

  insertShipper(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
    form.reset();
  }

  saveShipper(){
    this.shipper.name = this.addShipperForm.value["shipperName"]
    this.shipper.phone = this.addShipperForm.value["shipperPhone"]
    this.shipperService.insertShipper(this.shipper).subscribe(data =>{
      this.isSuccessful=true;
    })
  }
}
