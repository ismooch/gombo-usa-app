import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Model/Order';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { CustomerDeleteModalConfirm } from 'src/app/Modal/CustomerDeleteModalConfirm';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: Order;
  errorResponse: Object;
  allOtherordersForCustomer: Order[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _orderService: OrderService,
    private _router: Router,
    //private _customerDeleteModalConfirm: CustomerDeleteModalConfirm
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: ParamMap) => {
        this._orderService.getOrderById(params['id']).subscribe(
          (_response) => {
            this.order = _response['data'];  
          },
          (_error) => { 
            this.errorResponse = {
              'code': _error.status, 
              'type': _error.error.error.type,
              'description': _error.error.error.description 
            }
          }
        );
      }
    ); 
  }

  getAllordersCustomer(_customerId:number) {  
    this._orderService.getOrdersByCustomerId(_customerId).subscribe(
      (_response) => {
        this.allOtherordersForCustomer = _response['data'];    
      },
      (_error) => { 
        this.errorResponse = {
          'code': _error.status, 
          'type': _error.error.error.type,
          'description': _error.error.error.description 
        }
      }
    );
  }
}
