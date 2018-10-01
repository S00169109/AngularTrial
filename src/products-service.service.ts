import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Products } from './products';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
HTTP:HttpClient;
url:string = "../products.json";
  constructor(http:HttpClient) { this.HTTP = http;}
  getContent():Observable<Products[]>{
    try {
      return this.HTTP.get<Products[]>(this.url)
    } catch (error) {
      console.log(error);
    }
    
  
  }
}
