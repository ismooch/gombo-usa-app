import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Evenement } from 'src/app/Model/Evenement';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {

  events: Evenement[];
  @Output() eventsEmitter = new EventEmitter();
  errorMsg: Object;
  keys: String[];
  records: Number;

  constructor(
    private _eventService: EventService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  searchEventBySomething(searchingValue: string) {
    let chaine = searchingValue.trim();
    if(chaine.length >= 3) {
      let queryParams = new HttpParams().set('filterByOtherFields', chaine);
      this.setUpDataEventsList(queryParams);
    } else {
      this.setUpDataEventsList();
    }
  }

  private setUpDataEventsList(queryParams?: HttpParams) {
    this._eventService.getAllEvents(queryParams).subscribe(
      (_response) => { 
        this.eventsEmitter.emit(_response['data']);
      },
      (error) => {

      }
    );
  }


  filterEvents(filterDataValue) {
    let queryParams = new HttpParams();
    for(let key in filterDataValue) {
      if(filterDataValue[key] != "") {  
        queryParams = queryParams.append(key, filterDataValue[key]); 
      }
    }  
    this._eventService.getAllEvents(queryParams).subscribe(
      (_response) => { 
        this.events = _response['data']; 
        this.eventsEmitter.emit(this.events);
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
}
