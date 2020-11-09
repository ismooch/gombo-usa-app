import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/Customer';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { Evenement } from 'src/app/Model/Evenement';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  customers: Customer[];
  events: Evenement[];
  errorResponse: Object;

  constructor(
    private _orderService: OrderService,
    private _customerService: CustomerService,
    private _eventService: EventService,
    private _router: Router
  ) { }

  ngOnInit(): void {
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
        this.events = _response['data']; 
      },
      (error) => { 
        
      }, 
      () => { 
        
      },
    );
  }


  addOrder(_data) { 
    
     this._orderService.insertOrder(_data).subscribe(
       (_response) => {
         let orderId = _response['data']['orderId'];
         const goTo = ['order/detail', orderId]; 
         this._router.navigate(goTo);
       },
       (_error) => {  
       
            this.errorResponse = {
              'code': _error.status, 
              'type': _error.error.error.type,
              'description': _error.error.error.description 
            }
       }, 
       () => { 
         //alert('TERMINE');
       }
     );
   }
   

}
