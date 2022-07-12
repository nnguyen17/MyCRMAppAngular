import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Category } from 'src/interface/category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
category:Category ={
  name: '',
  description: '',
  id: 0
}

  addCategoryForm:FormGroup;

  isSuccessful:boolean=false;
  
  constructor(private builder:FormBuilder, private categoryService:CategoryService) { 
    this.addCategoryForm = builder.group({
      'categoryName':new FormControl(),
      'categoryDescription':new FormControl()
    });
  }

  ngOnInit(): void {
  }

  insertCategory(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
    form.reset();
  }
  
  saveCategory(){
    this.category.name = this.addCategoryForm.value["categoryName"]
    this.category.description = this.addCategoryForm.value["categoryDescription"]
    this.categoryService.insertCategory(this.category).subscribe(data =>{
      this.isSuccessful=true;
    })
  }
}
