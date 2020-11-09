import { Component, OnInit } from '@angular/core';
import { EventTypeService } from 'src/app/service/event-type.service.';
import { Router } from '@angular/router';
import { EventType } from 'src/app/Model/EventType';
import { EditionService } from 'src/app/service/edition.service';
import { Edition } from 'src/app/Model/Edition';
import { ExportService } from 'src/app/service/export.service';
import { HttpParams } from '@angular/common/http';
import { EventService } from 'src/app/service/event.service';
import { Evenement } from 'src/app/Model/Evenement';

@Component({
  selector: 'app-cr-index',
  templateUrl: './cr-index.component.html',
  styleUrls: ['./cr-index.component.css']
})
export class CrIndexComponent implements OnInit {

  eventTypes : EventType;
  editions: Edition;
  errorMessage: string;
  events: Evenement[];
  recordsCount: Number;
  errorMsg: { msg: string; code: number; };


  constructor(
    private _eventTypeService: EventTypeService,
    private _editionService: EditionService,
    private route: Router,
    private _exportService: ExportService,
    private _eventService: EventService,
  ) { }

  ngOnInit(): void {
    this._eventTypeService.getAllEventType().subscribe(
      (_eventTypes) => { 
        this.eventTypes = _eventTypes['data']; 
      },
      (error) => { 
        this.errorMessage = 'Pbm de connexion à votre serveur ';
      }, 
      () => { 
        
      },
    );
    this._editionService.getAllEdition().subscribe(
      (_editions) => { 
        this.editions = _editions['data']; 
      },
      (error) => { 
        this.errorMessage = 'Pbm de connexion à votre serveur ';
      }, 
      () => { 
        
      },
    );
  }



  // Generate Data to Word Document :: getData and ExportService
  generate(filterDataValue) {

   let queryParams = new HttpParams();
    for(let key in filterDataValue) {
      if(filterDataValue[key] != "") {  
        queryParams = queryParams.append(key, filterDataValue[key]); 
      }
    }   

    this._eventService.getAllEvents(queryParams).subscribe(
      (_response) => { 
        this.events = _response['data']['records']; // console.log("QueryParams", queryParams); console.log("Results", this.events); 
        this.recordsCount = _response['data']['recordsCount'];
        if(this.recordsCount) {
          this.exportDataToWord(this.events);
        }
      },
      (_error) => {  
        if(_error.status == 404) {
          this.errorMsg = {'msg': 'Events list not found', 'code': 404};   
        } else {
          this.errorMsg = {'msg': _error.statusText, 'code': _error.status};   
        } 
    });

  }
  
  
  
  private exportDataToWord(events) {
    this._exportService.exportToWord(events, 'CALENDAR_REPORT');
  }



}
