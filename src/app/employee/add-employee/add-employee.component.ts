import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Employee } from 'src/interface/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
employee:Employee ={
  firstName: '',
  lastName: '',
  city: '',
  title: '',
  hireDate: new Date(),
  birthDate: new Date(),
  regionId: 0,
  reportsTo: 0,
  titleOfCourtesy: '',
  address: '',
  postalCode: 0,
  country: '',
  phone: '',
  photoPath: '',
  id: 0,
  fullName:''
}

  addEmployeeForm:FormGroup;

  isSuccessful:boolean=false;

  constructor(private builder:FormBuilder, private employeeService:EmployeeService) { 
    this.addEmployeeForm = builder.group({
      'employeeFirstName':new FormControl(),
      'employeeLastName':new FormControl(),
      'employeeCity':new FormControl(),
      'employeeTitle':new FormControl(),
      'employeeHireDate':new FormControl(),
      'employeeBirthDate':new FormControl(),
      'employeeRegionId':new FormControl(),
      'employeeReportsTo':new FormControl(),
      'employeeTitleOfCourtesy':new FormControl(),
      'employeeAddress':new FormControl(),
      'employeePostalCode':new FormControl(),
      'employeeCountry':new FormControl(),
      'employeePhone':new FormControl(),
      'employeePhotoPath':new FormControl()
    });
  }

  ngOnInit(): void {
  }

  insertEmployee(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
    form.reset();
  }

  saveEmployee(){
    this.employee.firstName = this.addEmployeeForm.value["employeeFirstName"]
    this.employee.lastName = this.addEmployeeForm.value["employeeLastName"]
    this.employee.fullName = this.employee.firstName + this.employee.lastName
    this.employee.city = this.addEmployeeForm.value["employeeCity"]
    this.employee.title = this.addEmployeeForm.value["employeeTitle"]
    this.employee.hireDate = this.addEmployeeForm.value["employeeHireDate"]
    this.employee.birthDate = this.addEmployeeForm.value["employeeBirthDate"]
    this.employee.regionId = this.addEmployeeForm.value["employeeRegionId"]
    this.employee.reportsTo = this.addEmployeeForm.value["employeeReportsTo"]
    this.employee.titleOfCourtesy = this.addEmployeeForm.value["employeeTitleOfCourtesy"]
    this.employee.address = this.addEmployeeForm.value["employeeAddress"]
    this.employee.postalCode = this.addEmployeeForm.value["employeePostalCode"]
    this.employee.country = this.addEmployeeForm.value["employeeCountry"]
    this.employee.phone = this.addEmployeeForm.value["employeePhone"]
    this.employee.photoPath = this.addEmployeeForm.value["employeePhotoPath"]
    this.employeeService.insertEmployee(this.employee).subscribe(data =>{
      this.isSuccessful=true;
    })
  }
}
