import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SalesPersonService } from 'src/app/service/sales-person.service';
import { SalesPerson } from 'src/app/Model/SalesPerson';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sp-add',
  templateUrl: './sp-add.component.html',
  styleUrls: ['./sp-add.component.css']
})
export class SpAddComponent implements OnInit {

  @Output() salesPersonEmitter = new EventEmitter();
  
  constructor(
    private _salesPersonService : SalesPersonService,
    private _router: Router
    ) { }

  ngOnInit(): void {
  }


  addSalesPerson(_salesPersonData) { 
    this._salesPersonService.insertSalesPerson(_salesPersonData).subscribe(
      (_response) => { 
        let result = _response['data']; 
        const response = {"response": "success"};
        const action = {"action": "added"}
        let merged = {..._salesPersonData, ...response, ...action};
        this.salesPersonEmitter.emit(merged);
      },
      (_error) => { 
        
      }, 
      () => { 
        
      },
    );
  }
}
