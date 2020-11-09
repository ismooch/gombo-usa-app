import { Component, OnInit } from '@angular/core';
import { KPIService } from 'src/app/service/kpi.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class DashboardIndexComponent implements OnInit {

  data: [];
  errorMsg: Object;
  
  constructor(
    private _kpiService: KPIService
  ) { }

  ngOnInit(): void {
    this._kpiService.getKPI().subscribe(
      (_response) => { 
        this.data = _response['data'];  
      },
      (_error) => { console.log(_error);
        if(_error.status == 404) {
          this.errorMsg = {'msg': 'KPI not found', 'code': 404};   
        } else {
          this.errorMsg = {'msg': _error.statusText, 'code': _error.status};   
        } 
      }
    );
  }

}
