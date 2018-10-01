import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import {Products} from '../../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
@Input() productdata:Products[];
date:Date;
  constructor() {
      this.date = new Date();
      
     //console.log(this.productdata);
   }
  
  
  ngAfterViewInit(){
    
  }

}
