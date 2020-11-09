import {Component, Type, Injectable, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SalesPerson } from '../Model/SalesPerson';

@Injectable({
  providedIn: 'root'
})

@Component({
    selector: 'salesperson-delete-modal-confirm',
    template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Sales Person deletion</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>Are you sure you want to delete <span class="text-primary">"{{salesPersonToDelete.sales_person_fullname}}"</span> information?</strong></p>
      <p>All information associated to this record will be permanently deleted.
      <span class="text-danger">This operation can not be undone.</span>
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
      <button type="button" class="btn btn-danger" (click)="deleteSalesPerson()">Ok</button>
    </div>
    `
  })
  export class SalesPersonDeleteModalConfirm implements OnInit {

    @Input() salesPersonToDelete: SalesPerson;
   
    constructor(
      public modal: NgbActiveModal,
      private _modalService: NgbModal
    ) {}

    ngOnInit(): void {
      
    }

    open(name: string) {
      return this._modalService.open(MODALS[name]);
    }

    deleteSalesPerson() {
      this.modal.close(this.salesPersonToDelete.sales_person_id);
    }
  }

  const MODALS: {[name: string]: Type<any>} = {
    confirmSalesPersonDeletePanel: SalesPersonDeleteModalConfirm
  };
  
  

  /* (click)="modal.close('Ok click') */