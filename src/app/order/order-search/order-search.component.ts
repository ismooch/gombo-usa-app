import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/Model/Order';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.css']
})
export class OrderSearchComponent implements OnInit {

  orders: Order[];
  @Output() ordersEmitter = new EventEmitter();
  errorMsg: Object;

  constructor(
    private _orderService: OrderService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  searchOrderBySomething(searchingValue: string) {
    let chaine = searchingValue.trim();
    if(chaine.length >= 3) {
      let queryParams = new HttpParams().set('filterByOtherFields', chaine);
      this.setUpDataOrdersList(queryParams);
    } else {
      this.setUpDataOrdersList();
    }
  }

  private setUpDataOrdersList(queryParams?: HttpParams) {
    this._orderService.getAllOrders(queryParams).subscribe(
      (_response) => { 
        this.ordersEmitter.emit(_response['data']);
      },
      (error) => {

      }
    );
  }


  filterOrders(filterDataValue) {
    let queryParams = new HttpParams();
    for(let key in filterDataValue) {
      if(filterDataValue[key] != "") {  
        queryParams = queryParams.append(key, filterDataValue[key]); 
      }
    }  
    this._orderService.getAllOrders(queryParams).subscribe(
      (_response) => { 
        this.orders = _response['data']; 
        this.ordersEmitter.emit(this.orders);
      },
      (_error) => {  
        if(_error.status == 404) {
          this.errorMsg = {'msg': 'orders list not found', 'code': 404};   
        } else {
          this.errorMsg = {'msg': _error.statusText, 'code': _error.status};   
        } 
      }
); 
  }

}
