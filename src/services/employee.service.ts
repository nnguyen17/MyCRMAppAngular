import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from 'src/interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string = environment.apiKey+environment.apiControllers.employee
  
  constructor(private httpClient:HttpClient) { }

  getEmployee():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(this.url);
  }

  insertEmployee(employee:Employee):Observable<any>
  {
    return this.httpClient.post(this.url,employee)
  }

  deleteEmployee(id:any):Observable<any>
  {
    return this.httpClient.delete(this.url+"/"+id)
  }
}
