import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
HTTP:HttpClient;
url:string = "../products.json";
  constructor(http:HttpClient) { this.HTTP = http;}
  getContent(){
    return this.HTTP.get(this.url);
  }
}
