import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/Customer';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';
import { SalesPerson } from 'src/app/Model/SalesPerson';
import { SalesPersonService } from 'src/app/service/sales-person.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  errorMessage: String;
  customer: Customer;
  salesPersons: SalesPerson[];

  constructor(
    private _customerService: CustomerService,
    private _salesPersonService: SalesPersonService,
    private _router: Router
  ) { }

  ngOnInit(): void {
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


  addCustomer(customer: Customer) { 
   if(!customer.do_not_solicit) {
      customer.do_not_solicit = "0";
    }
    this._customerService.insertCustomer(customer).subscribe(
      (response) => {
        const goTo = ['/customer/index']; 
        this.customer = response;
        this._router.navigate(goTo);
      },
      (error) => { 
        
      }, 
      () => { 
        //alert('TERMINE');
      }
    );
  }
  

}
