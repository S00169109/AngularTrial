import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
//import { Observable } from 'rxjs/Observable';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
   // Observable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
