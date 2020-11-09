import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/Model/Order';
import { Customer } from 'src/app/Model/Customer';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {

  @Input() theCustomer: Customer;
  @Input() ordersList: Order[];
  
  constructor(
    
  ) { }
  
  ngOnInit(): void {
   
  }

}
