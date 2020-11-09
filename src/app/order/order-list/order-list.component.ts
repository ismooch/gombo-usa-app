import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Model/Order';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  errorMsg: Object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _orderService: OrderService,
    private _router: Router,
   // private _customerDeleteModalConfirm: CustomerDeleteModalConfirm
  ) { }

  ngOnInit(): void {
    this._orderService.getAllOrders().subscribe(
          (_response) => {
            this.orders = _response['data'];  
          },
          (_error) => { 
            if(_error.status == 404) {
              this.errorMsg = {'msg': 'Orders list not found', 'code': 404};   
            } else {
              this.errorMsg = {'msg': _error.statusText, 'code': _error.status};   
            } 
          }
    ); 
  }

  receiveOrdersFiltered(_ordersFilteredReceived) {
    this.orders = _ordersFilteredReceived; 
  }
}
