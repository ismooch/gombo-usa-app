import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/Model/Customer';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {

  @Output() customersEmitter = new EventEmitter();
  constructor(
    private _customerService: CustomerService
  ) { }

  ngOnInit(): void {
  }

  searchCustomer(searchingValue: string) {
    let chaine = searchingValue.trim();
    if(chaine.length >= 2) {
      this.setUpDataCustomersList(chaine);
    } else {
      this.setUpDataCustomersList();
    }
  }

  private setUpDataCustomersList(chaine?: string) {
    this._customerService.getCustomers(chaine).subscribe(
      (_response) => { 
        this.customersEmitter.emit(_response['data']);
      },
      (error) => {

      }
    );
  }


}
