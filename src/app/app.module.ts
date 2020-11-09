import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerIndexComponent } from './customer/customer-index/customer-index.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SpAddComponent } from './salesPerson/sp-add/sp-add.component';
import { SpIndexComponent } from './salesPerson/sp-index/sp-index.component';
import { CustomerSearchComponent } from './customer/customer-search/customer-search.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { CustomerEventComponent } from './customer/customer-event/customer-event.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventAddComponent } from './event/event-add/event-add.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventSearchComponent } from './event/event-search/event-search.component';
import { DashboardIndexComponent } from './dashboard/index/index.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { CustomerOrderComponent } from './customer/customer-order/customer-order.component';
import { OrderSearchComponent } from './order/order-search/order-search.component';
import { SpEditComponent } from './salesPerson/sp-edit/sp-edit.component';
import { SpDeleteComponent } from './salesPerson/sp-delete/sp-delete.component';
import { CrIndexComponent } from './calendarReport/cr-index/cr-index.component';
import { EventExportComponent } from './event/event-export/event-export.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomerIndexComponent,
    CustomerAddComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
    SpAddComponent,
    SpIndexComponent,
    CustomerSearchComponent,
    EventListComponent,
    CustomerEventComponent,
    EventDetailComponent,
    EventAddComponent,
    EventEditComponent,
    EventSearchComponent,
    DashboardIndexComponent,
    OrderListComponent,
    OrderAddComponent,
    OrderEditComponent,
    OrderDetailComponent,
    CustomerOrderComponent,
    OrderSearchComponent,
    SpEditComponent,
    SpDeleteComponent,
    CrIndexComponent,
    EventExportComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    NgbActiveModal,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
