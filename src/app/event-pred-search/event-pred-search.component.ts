import { Component, OnInit } from '@angular/core';
import {EventService} from 'src/app/service/event.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-pred-search',
  templateUrl: './event-pred-search.component.html',
  styleUrls: ['./event-pred-search.component.css']
})
export class EventPredSearchComponent implements OnInit {

  title = "TypeAhead";
  apiEndpoint = environment.apiEndpoint;
  
    constructor(
      private _eventService : EventService
    ) {}
  
    
    public myLocalList = [];
    public search2 = '';
  
    selectedStatic(result) {
      this.search2 = result;
  
    }
  
  
  
    updateList(value: string) {
      this._eventService.getEvents(value).subscribe(
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
