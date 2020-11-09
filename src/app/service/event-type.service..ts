import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { EventType } from '../Model/EventType';

@Injectable({
  providedIn: 'root'
})
export class EventTypeService {
  
  apiEndpoint = environment.apiEndpoint + "/event-type";
  eventType: EventType;
  constructor(
    private http: HttpClient
  ) { }

  getAllEventType(): Observable<EventType[]> {  
     return this.http.get<EventType[]>(this.apiEndpoint);
  }



}
