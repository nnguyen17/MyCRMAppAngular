import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from 'src/interface/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url:string = environment.apiKey+environment.apiControllers.order
  
  constructor(private httpClient:HttpClient) { }

  getOrder():Observable<Order[]>
  {
    return this.httpClient.get<Order[]>(this.url);
  }

  insertOrder(order:Order):Observable<any>
  {
    return this.httpClient.post(this.url,order)
  }

  deleteOrder(id:any):Observable<any>
  {
    return this.httpClient.delete(this.url+"/"+id)
  }
}
