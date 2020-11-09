import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/Model/Evenement';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { CustomerDeleteModalConfirm } from 'src/app/Modal/CustomerDeleteModalConfirm';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Evenement[];
  keys: String[];
  errorMsg: Object;
  records: Number;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private _eventService: EventService,
    private _router: Router,
   // private _customerDeleteModalConfirm: CustomerDeleteModalConfirm
  ) { }

  ngOnInit(): void {
    this._eventService.getAllEvents().subscribe(
          (_response) => {
            this.events = _response['data']['records'];
            this.records =  _response['data']['recordsCount']
            this.keys = Object.keys(this.events); 
          },
          (_error) => { 
            if(_error.status == 404) {
              this.errorMsg = {'msg': 'Events list not found', 'code': 404};   
            } else {
              this.errorMsg = {'msg': _error.statusText, 'code': _error.status};   
            } 
          }
    ); 
  }

  receiveEventsFiltered(_eventsFilteredReceived) {
   
    this.events = _eventsFilteredReceived['records']; 
    this.keys = Object.keys(this.events); 
    this.records = _eventsFilteredReceived['recordsCount']
  }

}
