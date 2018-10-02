import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {Products} from '../../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {
@Input() productdata:Products[];
@Output() dataREC:EventEmitter<boolean>;
check:string;
date:Date;
datecomparecheck:boolean;
  constructor() {
      this.date = new Date();
      this.check=this.date.toDateString();
     console.log(this.check);
   }
  datecheck():void{
   /*  console.log(this.productdata);
    this.productdata.forEach(element => {
      if (element.releaseDate.getFullYear >= this.date.getFullYear) {
        this.datecomparecheck = false;
        

      }
      else{
        console.log("true");
        this.datecomparecheck = true
      }
      
    });*/
    
  }
  ngOnChanges(){
    if (this.productdata) {
      this.productdata.forEach(element => {
        
        // console.log( this.date.toString(),element.releaseDate );
         if (element.releaseDate.toString() <= this.date.toDateString()) {
          console.log(element.releaseDate);
        }
     });
    }
    
  }

}
