import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from 'src/interface/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string = environment.apiKey+environment.apiControllers.customer
  
  constructor(private httpClient:HttpClient) { }

  getCustomer():Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(this.url);
  }

  insertCustomer(customer:Customer):Observable<any>
  {
    return this.httpClient.post(this.url,customer)
  }

  deleteCustomer(id:any):Observable<any>
  {
    return this.httpClient.delete(this.url+"/"+id)
  }
}
