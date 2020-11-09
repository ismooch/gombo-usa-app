import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { CustomerDeleteModalConfirm } from 'src/app/Modal/CustomerDeleteModalConfirm';
import { EventService } from 'src/app/service/event.service';
import { Evenement } from 'src/app/Model/Evenement';
import { Customer } from 'src/app/Model/Customer';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Evenement;
  errorMsg: Object;
  allOtherEventsForCustomer: Evenement[];
  records: number;
  keys: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _eventService: EventService,
    private _router: Router,
    private _customerDeleteModalConfirm: CustomerDeleteModalConfirm
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: ParamMap) => {
        this._eventService.getEventById(params['id']).subscribe(
          (_response) => {
            this.event = _response['data'];  
          },
          (_error) => { 
            if(_error.status == 404) {
              this.errorMsg = {'msg': 'Event not found', 'code': 404};   
            } else {
              this.errorMsg = {'msg': _error.statusText, 'code': _error.status};   
            } 
          }
        );
      }
    ); 
  }

  getAllEventsCustomer(_customerId:number) {  
    this._eventService.getEventsByCustomerId(_customerId).subscribe(
      (_response) => {
        this.allOtherEventsForCustomer = _response['data']['records']; 
        this.records =  _response['data']['recordsCount'];
        this.keys = Object.keys(this.allOtherEventsForCustomer);    
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
}
