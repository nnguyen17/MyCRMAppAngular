import { Component, OnInit } from '@angular/core';
import { Category } from 'src/interface/category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  categoryCollection:Category[] = []

  constructor(private categoryService:CategoryService) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.categoryService.getCategory().subscribe(data=>{
      this.categoryCollection = data
    })
  }

  deleteCategory(id:any){
    this.categoryService.deleteCategory(id).subscribe(data => {
      this.getData();
    });
  }

}
