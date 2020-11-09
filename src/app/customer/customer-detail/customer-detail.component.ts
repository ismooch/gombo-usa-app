import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/Model/Customer';
import { Route } from '@angular/compiler/src/core';
import { CustomerDeleteModalConfirm } from 'src/app/Modal/CustomerDeleteModalConfirm';
import { EventService } from 'src/app/service/event.service';
import { Evenement } from 'src/app/Model/Evenement';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer;
  errorMsg: Object;
  allOtherEventsForCustomer = [];
  
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _customerService: CustomerService,
    private _router: Router,
    private _customerDeleteModalConfirm: CustomerDeleteModalConfirm,
    private _eventService: EventService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (params: ParamMap) => {
        this._customerService.getCustomerById(params['id']).subscribe(
          (_customer) => {
            this.customer = _customer['data'];  
          },
          (error) => { 
            if(error.status == 404) {
              this.errorMsg = {'msg': 'Customer not found', 'code': 404};   
            } else {
              this.errorMsg = {'msg': error.statusText, 'code': error.status};   
            } 
          }
        );
        this._eventService.getEventsByCustomerId(params['id']).subscribe(
          (_response) => {
            this.allOtherEventsForCustomer = [];
            let records = _response['data']['records'];     
            for (let data of Object.values(records)) { 
              this.allOtherEventsForCustomer.push(data);
            } 
          },
          (_error) => { 
            if(_error.status == 404) {
              this.errorMsg = {'msg': 'Event List not found', 'code': 404};   
            } else {
              this.errorMsg = {'msg': _error.statusText, 'code': _error.status};   
            } 
          }
        );
      }
    ); 

    

  }

  editCustomer() {
      const redirectTo = ['/customer/edit', this.customer.customer_id]; 
      this._router.navigate(redirectTo);
  }

  
  open(name: string, _customer:Customer) { 
    const confirmPanel = this._customerDeleteModalConfirm.open(name);
    confirmPanel.componentInstance.customerToDelete = _customer; 
    confirmPanel.result
    .then((objectIdDelete) => {
      if (objectIdDelete) {
        const routeTo = ['/customer/delete', objectIdDelete];
        this._router.navigate(routeTo);
      }
     })
     .catch(function() {
      confirmPanel.close();
     });
  }


}
