import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { Evenement } from 'src/app/Model/Evenement';
import { Customer } from 'src/app/Model/Customer';
import { EventTypeService } from 'src/app/service/event-type.service.';
import { EventType } from 'src/app/Model/EventType';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event: Evenement;
  eventTypes: EventType;
  eventDateInfo: any;
  customer: Customer;
  errorMsg: Object;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _eventService: EventService,
    private _eventTypeService: EventTypeService,
    private router: Router,

  ) { }

  ngOnInit(): void { 
    this.activatedRoute.params.subscribe(
      (params: ParamMap) => {  
        var eventDateId = Number(this.activatedRoute.snapshot.queryParamMap.get("eventDateId"));
        this._eventService.getEventById(params['eventId'], eventDateId).subscribe(
          (_response) => { 
            this.event = _response['data'];  
            this.eventDateInfo = this.event.dates[0];  
          }, 
          (error) => {
            
          }
        );
        this._eventTypeService.getAllEventType().subscribe(
          (_eventTpes) => { 
            this.eventTypes = _eventTpes['data'];  
          },
          (error) => {
            
          }
        );
      }
    ); 

  }

  updateEvent(frmValue) {
    this._eventService.updateEvent(frmValue).subscribe(
      (_response) => { 
        const route = ['/event/detail', this.event.event_id];
        this.router.navigate(route);
      },
      (error) => {
        
      }
    );
  }

}
