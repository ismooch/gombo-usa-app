import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/Model/Customer';
import { CustomerService } from 'src/app/service/customer.service';
import { CustomerDeleteModalConfirm } from 'src/app/Modal/CustomerDeleteModalConfirm';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/Model/Evenement';
import { EventService } from 'src/app/service/event.service';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/Model/Order';

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.css']
})
export class CustomerIndexComponent implements OnInit {

  customers: Customer[];
  customerSelected: Customer;
  customerEvents = [];
  customerOrders: Order[];
  errorMessage: string;
  loadWhat: String;
  keys: String[];
  records: Number;
  
  constructor(
    private _customerService: CustomerService,
    private _customerDeleteModalConfirm: CustomerDeleteModalConfirm,
    private _eventService: EventService,
    private _orderService: OrderService,
    private route: Router
  ) { }

  // console.log("Error :: " + error);

  ngOnInit(): void {
    this._customerService.getCustomers().subscribe(
      (customers) => { 
        this.customers = customers['data']; 
      },
      (error) => { 
        this.errorMessage = 'Pbm de connexion à votre serveur ';
      }, 
      () => { 
        
      },
    );
  }

  receiveCustomersFiltered($event) {
    this.customers = $event;
  }

  eventsForCustomer(_customerSelected: Customer) { 
    this.loadWhat = "events";
    this.customerSelected = _customerSelected; 
    this._eventService.getEventsByCustomerId(this.customerSelected.customer_id).subscribe(
      (_events) => { 
        this.customerEvents = [];
        var events = _events['data']['records']; 
        for (let data of Object.values(events)) { 
          this.customerEvents.push(data);
        }
        
      },
      (_error) => { 
        //this.errorMessage = 'Pbm de connexion à votre serveur ';
      }, 
      () => { 
        
      },
    );
  }

  ordersForCustomer(_customerSelected: Customer) { 
    this.loadWhat = "orders";
    this.customerSelected = _customerSelected; 
    this._orderService.getOrdersByCustomerId(this.customerSelected.customer_id).subscribe(
      (_orders) => {  console.log(_orders);
        this.customerOrders = _orders['data']; 
      },
      (_error) => { 
        //this.errorMessage = 'Pbm de connexion à votre serveur ';
      }, 
      () => { 
        
      },
    );
  }

  open(name: string, _customer:Customer) { 
    const confirmPanel = this._customerDeleteModalConfirm.open(name);
    confirmPanel.componentInstance.customerToDelete = _customer; 
    confirmPanel.result
    .then((objectIdDelete) => {
      if (objectIdDelete) {
        const routeTo = ['/customer/delete', objectIdDelete];
        this.route.navigate(routeTo);
      }
     })
     .catch(function() {
      confirmPanel.close();
     });
  }

}
