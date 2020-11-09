import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SalesPersonService } from 'src/app/service/sales-person.service';
import { SalesPerson } from 'src/app/Model/SalesPerson';

@Component({
  selector: 'app-sp-edit',
  templateUrl: './sp-edit.component.html',
  styleUrls: ['./sp-edit.component.css']
})
export class SpEditComponent implements OnInit {


  @Input() theSalesPerson: SalesPerson;
  @Output() salesPersonEmitter = new EventEmitter();
  
  constructor(
    private _salesPersonService : SalesPersonService,
  ) { }

  ngOnInit(): void {
    
  }

  updateSalesPerson() { 
    this._salesPersonService.updateSalesPerson(this.theSalesPerson).subscribe(
      (_response) => { 
        let result = _response['data']; 
        const response = {"response": "success"};
        const action = {"action": "updated"}
        let merged = {...this.theSalesPerson, ...response, ...action};
        this.salesPersonEmitter.emit(merged);
      },
      (_error) => { 
        
      }, 
      () => { 
        
      },
    );
  }
}
