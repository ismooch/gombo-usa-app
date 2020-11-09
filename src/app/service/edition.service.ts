import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Edition } from '../Model/Edition';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventType } from '../Model/EventType';

@Injectable({
  providedIn: 'root'
})
export class EditionService {

  apiEndpoint = environment.apiEndpoint + "/edition";
  edition: Edition;
  constructor(
    private http: HttpClient
  ) { }

  getAllEdition(): Observable<Edition[]> {  
     return this.http.get<Edition[]>(this.apiEndpoint);
  }

}
