import {Component, Type, Injectable, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from '../Model/Customer';

@Injectable({
  providedIn: 'root'
})

@Component({
    selector: 'customer-delete-modal-confirm',
    template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Customer deletion</h4>
      <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p><strong>Are you sure you want to delete <span class="text-primary">"{{customerToDelete.customer_name}}"</span> information?</strong></p>
      <p>All information associated to this customer will be permanently deleted.
      <span class="text-danger">This operation can not be undone.</span>
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
      <button type="button" class="btn btn-danger" (click)="deleteCustomer()">Ok</button>
    </div>
    `
  })
  export class CustomerDeleteModalConfirm implements OnInit {

    @Input() customerToDelete: Customer;
    //@Output() eventEntry:  EventEmitter<any> = new EventEmitter();
    constructor(
      public modal: NgbActiveModal,
      private _modalService: NgbModal
    ) {}

    ngOnInit(): void {
      
    }

    open(name: string) {
      return this._modalService.open(MODALS[name]);
    }

    deleteCustomer() {
      this.modal.close(this.customerToDelete.customer_id);
    }
  }

  const MODALS: {[name: string]: Type<any>} = {
    confirmCustomerDeletePanel: CustomerDeleteModalConfirm
  };
  
  

  /* (click)="modal.close('Ok click') */