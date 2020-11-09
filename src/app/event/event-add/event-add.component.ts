import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit, ViewChildren  } from '@angular/core';
import { Evenement } from 'src/app/Model/Evenement';
import { EventService } from 'src/app/service/event.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/Model/Customer';
import { EventTypeService } from 'src/app/service/event-type.service.';
import { EventType } from 'src/app/Model/EventType';



@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit, AfterViewInit {

  errorMsg: Object;
  evenement: Evenement;
  eventTypes: EventType;
  customer: Customer;
  numberOfDate: Number[] = [1];

  @ViewChild("dateSettingsContainer", { read: ElementRef}) dateSettingsContainer: ElementRef;
  @ViewChildren("formGroup", { read: ElementRef}) formGroup;
  


  constructor(
    private _eventService: EventService,
    private _eventTypeService: EventTypeService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _customerService: CustomerService,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (params: ParamMap) => {
        this._customerService.getCustomerById(params['customerId']).subscribe(
          (_customer) => { 
            this.customer = _customer['data'];  
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

  addEvent(evenement: any) { 
    console.log("Event :::: ", {...evenement, ...{'numberOfDate': this.numberOfDate.length}});
    this._eventService.insertEvent(evenement).subscribe(
       (_response) => {
         const goTo = ['/event/detail', _response['data']['eventId']]; 
         this.evenement = _response;
         this._router.navigate(goTo);
       },
       (error) => { 
          this.errorMsg = {'msg': error.statusText, 'code': error.status};   
       }, 
       () => { 
         //alert('TERMINE');
       }
     ); 
   }


  settingNumberOfDayPanel(event: any) {
    var numberOfDays = event.target.value; 
    this.numberOfDate = [];
    for (var i=1; i <= numberOfDays; i++) {
      this.numberOfDate.push(i);
    }
    
  }
   

}
