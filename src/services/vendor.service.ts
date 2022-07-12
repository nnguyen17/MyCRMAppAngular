import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendor } from 'src/interface/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  url:string = environment.apiKey+environment.apiControllers.vendor
  
  constructor(private httpClient:HttpClient) { }

  getVendor():Observable<Vendor[]>
  {
    return this.httpClient.get<Vendor[]>(this.url);
  }

  insertVendor(vendor:Vendor):Observable<any>
  {
    return this.httpClient.post(this.url,vendor)
  }

  deleteVendor(id:any):Observable<any>
  {
    return this.httpClient.delete(this.url+"/"+id)
  }
}
