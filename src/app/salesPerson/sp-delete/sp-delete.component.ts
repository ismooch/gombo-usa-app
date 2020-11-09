import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SalesPerson } from 'src/app/Model/SalesPerson';
import { SalesPersonService } from 'src/app/service/sales-person.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-sp-delete',
  templateUrl: './sp-delete.component.html',
  styleUrls: ['./sp-delete.component.css']
})
export class SpDeleteComponent implements OnInit {

  salesPerson: SalesPerson;
  @Output() salesPersonEmitter = new EventEmitter();

  constructor(
    private _salesPersonService: SalesPersonService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  // console.log('Error Recuperation Customer ', error);

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (params: ParamMap) => {
        if(params['id']) {
          this._salesPersonService.deleteSalesPerson(params['id']).subscribe(
            (_response) => { 
              let result = {"sales_person_fullname": "the Sales Person"}; 
              const response = {"response": "success"};
              const action = {"action": "updated"}
              let merged = {...result, ...response, ...action};
              this.salesPersonEmitter.emit(merged); //console.log('Emiiter For Delete', this.salesPersonEmitter);

              const toRoute = ['/salesperson/index'];
              this._router.navigate(toRoute);
            },
            (error) => {
              
            }
          );
        }
      }
    ); 
  }

  deleteSalesPerson(id: number) {
    this._salesPersonService.deleteSalesPerson(id).subscribe(
      (_salesPerson) => { 
        this.salesPerson = _salesPerson['data']; 
      },
      (error) => {
        
      }
    );
  }

}
