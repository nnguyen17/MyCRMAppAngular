import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/interface/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
category:Category ={
  name: '',
  description: ''
}
  constructor() { }

  ngOnInit(): void {
  }

  insertCategory(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
form.reset();
  }
}
