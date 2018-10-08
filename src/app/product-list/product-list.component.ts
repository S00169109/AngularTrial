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

  constructor() {
      
     
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
    
  }

}
