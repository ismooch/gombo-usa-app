import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/Model/Customer';
import { Evenement } from 'src/app/Model/Evenement';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-customer-event',
  templateUrl: './customer-event.component.html',
  styleUrls: ['./customer-event.component.css']
})
export class CustomerEventComponent implements OnInit {

  @Input() theCustomer: Customer;
  @Input() eventsList: any;
  
  constructor(
    private _eventService: EventService
  ) { }

  ngOnInit(): void { 
   
  }

  getEventsForCustomer() {

  }

}
