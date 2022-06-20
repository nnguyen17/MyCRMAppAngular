import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Region } from 'src/interface/region';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {
region:Region ={
  name: ''
}
  constructor() { }

  ngOnInit(): void {
  }

  insertRegion(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
form.reset();
  }
}
