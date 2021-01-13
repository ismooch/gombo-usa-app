import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {OrderService} from 'src/app/service/order.service';


@Component({
  selector: 'app-order-pred-search',
  templateUrl: './order-pred-search.component.html',
  styleUrls: ['./order-pred-search.component.css']
})
export class OrderPredSearchComponent implements OnInit {
  title = "TypeAhead";
  apiEndpoint = environment.apiEndpoint;
  
    constructor(
      private _orderService : OrderService
    ) {}
  
    
    public myLocalList = [];
    public search3 = '';
  
    selectedStatic(result) {
      this.search3 = result;
  
    }
  
  
  
    updateList(value: string) {
      this._orderService.getOrders(value).subscribe(
        (_response) => { 
          this.myLocalList = _response['data'];
        },
        (error) => {
  
        }
      );
    }
  
  
  
  
    ngOnInit(): void {
    }
  

}
