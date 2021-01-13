import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Evenement } from '../Model/Evenement';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  apiEndpoint = environment.apiEndpoint + "/events";
  event: Event;
  constructor(
    private http: HttpClient
  ) { }

  getAllEvents(filterParams?: HttpParams): Observable<Evenement[]> {  
    if(filterParams) { 
       return this.http.get<Evenement[]>(this.apiEndpoint, {params: filterParams});
    }
    return this.http.get<Evenement[]>(this.apiEndpoint);
  }

  getEvents(filterParams?: string): Observable<Evenement[]> {  
    if(filterParams) { 
      let params = new HttpParams().set('filterParams', filterParams);
       return this.http.get<Evenement[]>(this.apiEndpoint, {params: params});
    }
    return this.http.get<Evenement[]>(this.apiEndpoint);
  }

  getEventById(id: Number, eventDateId?: Number): Observable<Evenement> { 
    if(eventDateId) { 
          return this.http.get<Evenement>(this.apiEndpoint + "/" + id + "?eventDateId="+eventDateId);
    } 
    return this.http.get<Evenement>(this.apiEndpoint + "/" + id);
  }

  insertEvent(evenement: Evenement) : Observable<Evenement> {  
    console.log("Service Reached!");
    console.log(evenement);
    return this.http.post<Evenement>(this.apiEndpoint, evenement);
  }

  updateEvent(evenement: Evenement): Observable<any> {    
    return this.http.put(this.apiEndpoint, evenement);
  }

  deleteEvent(id: Number): Observable<any> { 
    return this.http.delete(this.apiEndpoint + "/" + id);
  }

  getEventsByCustomerId(eventId: number): Observable<Evenement[]> { 
    const theEndpoint = this.apiEndpoint + '/customer/' + eventId;
    return this.http.get<Evenement[]>(theEndpoint);
  }



}
