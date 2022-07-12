import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/interface/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  employeeCollection:Employee[] = []
  constructor(private employeeService:EmployeeService) {

   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.employeeService.getEmployee().subscribe(data=>{
      this.employeeCollection = data
    })
  }

  deleteEmployee(id:any){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.getData();
    });
  }

}
