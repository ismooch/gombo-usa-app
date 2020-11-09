import { Component, OnInit } from '@angular/core';
import {CustomerService} from 'src/app/service/customer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-pred-search',
  templateUrl: './customer-pred-search.component.html',
  styleUrls: ['./customer-pred-search.component.css']
})
export class CustomerPredSearchComponent implements OnInit {
title = "TypeAhead";
apiEndpoint = environment.apiEndpoint;

  constructor(
    private _customerService : CustomerService
  ) {}

  
  public myLocalList = [];
  public search1 = '';

  selectedStatic(result) {
    this.search1 = result;

  }



  updateList(value: string) {
    this._customerService.getCustomers(value).subscribe(
      (_response) => { 
        this.myLocalList = _response['data'];
      },
      (error) => {

      }
    );
  }




  ngOnInit(): void {
  }

}
