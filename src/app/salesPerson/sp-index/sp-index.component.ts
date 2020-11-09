import { Component, OnInit } from '@angular/core';
import { SalesPerson } from 'src/app/Model/SalesPerson';
import { SalesPersonService } from 'src/app/service/sales-person.service';
import { Router } from '@angular/router';
import { SalesPersonDeleteModalConfirm } from 'src/app/Modal/SalesPersonDeleteModalConfirm';
import { SpDeleteComponent } from '../sp-delete/sp-delete.component';

@Component({
  selector: 'app-sp-index',
  templateUrl: './sp-index.component.html',
  styleUrls: ['./sp-index.component.css']
})
export class SpIndexComponent implements OnInit {

  currentSalesPerson: SalesPerson;
  salesPersons: SalesPerson[];
  errorMessage: string;
  theSalesPerson: SalesPerson;
  
  constructor(
    private _salesPersonService: SalesPersonService,
    private route: Router,
    private _salesPersonDeleteModalConfirm: SalesPersonDeleteModalConfirm
  ) { }

  // console.log("Error :: " + error);

  ngOnInit(): void {
    this.loadSalesPersons();
  }

  loadSalesPersons() {
    this._salesPersonService.getSalesPersons().subscribe(
      (_response) => { 
        this.salesPersons = _response['data']; 
      },
      (_error) => { 
        
      }, 
      () => { 
        
      },
    );
  }

  getNewOrUpdateSalesPerson(data) { console.log('Last Emitter', data);
    this.currentSalesPerson = data;
    this.loadSalesPersons();
  }

  selectSalesPerson(_selected: SalesPerson) {
    this.theSalesPerson = _selected;
  }

  open(name: string, _salesPerson: SalesPerson) { 
    const confirmPanel = this._salesPersonDeleteModalConfirm.open(name);
    confirmPanel.componentInstance.salesPersonToDelete = _salesPerson; 
    confirmPanel.result
      .then((objectIdDelete) => {
        if (objectIdDelete) {
           const routeTo = ['/salesperson/delete', objectIdDelete];
           this.route.navigate(routeTo);
        }
      })
      .catch(function() {
        confirmPanel.close();
      });
  }

 
}
