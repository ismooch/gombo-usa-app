import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/Model/Customer';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customer: Customer;
  constructor(
    private _customerService: CustomerService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  // console.log('Error Recuperation Customer ', error);

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (params: ParamMap) => {
        this._customerService.deleteCustomer(params['id']).subscribe(
          (_customer) => { 
            this.customer = _customer['data']; 
            const toRoute = ['/customer/index'];
            this._router.navigate(toRoute);
          },
          (error) => {
            
          }
        );
      }
    ); 
  }

  
}
