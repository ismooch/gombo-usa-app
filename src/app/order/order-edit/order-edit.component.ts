import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/Customer';
import { Evenement } from 'src/app/Model/Evenement';
import { OrderService } from 'src/app/service/order.service';
import { CustomerService } from 'src/app/service/customer.service';
import { EventService } from 'src/app/service/event.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Order } from 'src/app/Model/Order';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  customers: Customer[];
  order: Order;
  customerEvents: Evenement[];
  errorMsg: Object;
  orderEventId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _orderService: OrderService,
    private _customerService: CustomerService,
    private _eventService: EventService,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params: ParamMap) => { 
        this._orderService.getOrderById(params['id']).subscribe(
          (_response) => { 
            this.order = _response['data']; 
            this.getCustomerEvents(this.order.customer.customer_id);  
            this.orderEventId = (this.order.event) ? this.order.event.event_id : 0; 
          },
          (error) => {
            
          }
        );
      }
    ); 

    this._customerService.getCustomers().subscribe(
      (_customers) => { 
        this.customers = _customers['data']; 
      },
      (error) => { 
        
      }, 
      () => { 
        
      },
    );
    
  }

  getCustomerEvents(_customerId: number) { 
    this._eventService.getEventsByCustomerId(_customerId).subscribe(
      (_response) => {  
        this.customerEvents = _response['data'];  
      },
      (error) => { 
        
      }, 
      () => { 
        
      },
    );
  }


  updateOrder(_data) { 
    
     this._orderService.updateOrder(_data).subscribe(
       (_response) => {  
         const goTo = ['order/index']; 
         this._router.navigate(goTo);
       },
       (_error) => { 
         
       }, 
       () => { 
         //alert('TERMINE');
       }
     );
   }


  
}
