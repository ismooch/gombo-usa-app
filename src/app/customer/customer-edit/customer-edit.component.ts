import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/Customer';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { SalesPersonService } from 'src/app/service/sales-person.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;
  salesPersons: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    private _salesPersonService: SalesPersonService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: ParamMap) => {
        this.customerService.getCustomerById(params['id']).subscribe(
          (_customer) => { 
            this.customer = _customer['data'];  
            this.customer.do_not_solicit = (this.customer.do_not_solicit == 'no') ? "0" : "1";
          },
          (error) => {
            
          }
        );
      }
    ); 
    this._salesPersonService.getSalesPersons().subscribe(
      (response) => {
        this.salesPersons = response['data'];  
       },
      (error) => { 
        
      }, 
      () => { 
       
      }
    );
  }

  updateCustomer() { 
    this.customerService.updateCustomer(this.customer).subscribe(
      (_customer) => { 
        const route = ['/customer/detail', this.customer.customer_id];
        this.router.navigate(route);
      },
      (error) => {
        
      }
    );
  }

}
