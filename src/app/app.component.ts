import { Component } from '@angular/core';
import {ProductsServiceService} from '../products-service.service';
import { Products } from '../products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductsServiceService]
})
export class AppComponent {
  Data:Products[];
  
  constructor(private GetData:ProductsServiceService) {
    this.GetContent();
  }
  GetContent(){
    this.GetData.getContent().subscribe(data => {
      this.Data = data;
      
    })
  }
}
