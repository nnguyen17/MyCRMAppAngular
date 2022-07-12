import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from 'src/interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:string = environment.apiKey+environment.apiControllers.category
  
  constructor(private httpClient:HttpClient) { }

  getCategory():Observable<Category[]>
  {
    return this.httpClient.get<Category[]>(this.url);
  }

  insertCategory(category:Category):Observable<any>
  {
    return this.httpClient.post(this.url,category)
  }

  deleteCategory(id:any):Observable<any>
  {
    return this.httpClient.delete(this.url+"/"+id)
  }
}
