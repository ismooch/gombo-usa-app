import { Component, OnInit, Input } from '@angular/core';
import { ExportService } from 'src/app/service/export.service';
import { Evenement } from 'src/app/Model/Evenement';

@Component({
  selector: 'app-event-export',
  templateUrl: './event-export.component.html',
  styleUrls: ['./event-export.component.css']
})
export class EventExportComponent implements OnInit {

  private jsonData;
  @Input() events: Evenement[];


  constructor(
    private exportService: ExportService
  ) { }

  ngOnInit(): void {
    
  }

  exportAsWordDocument() {
    this.exportService.exportToWord(this.events);
      
  }




}
