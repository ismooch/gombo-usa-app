import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerIndexComponent } from './customer/customer-index/customer-index.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import { SpIndexComponent } from './salesPerson/sp-index/sp-index.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventAddComponent } from './event/event-add/event-add.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { DashboardIndexComponent } from './dashboard/index/index.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { SpAddComponent } from './salesPerson/sp-add/sp-add.component';
import { SpEditComponent } from './salesPerson/sp-edit/sp-edit.component';
import { SpDeleteComponent } from './salesPerson/sp-delete/sp-delete.component';
import { CrIndexComponent } from './calendarReport/cr-index/cr-index.component';


const routes: Routes = [
  // KPI
  {
    path: 'dashboard', component: DashboardIndexComponent 
  },
  // Customers
  {
    path: 'customer',
    children: [
      { path: 'index', component: CustomerIndexComponent},
      { path: 'add',   component: CustomerAddComponent },
      { path: 'detail/:id',   component: CustomerDetailComponent },
      { path: 'edit/:id',   component: CustomerEditComponent },
      { path: 'delete/:id',   component: CustomerDeleteComponent },
    ]
 },
 {
  path: 'event',
  children: [
    { path: 'index', component: EventListComponent},
    { path: 'add/customer/:customerId', component: EventAddComponent},
    { path: 'customer/:id', component: EventListComponent},
    { path: 'detail/:id', component: EventDetailComponent},
    { path: 'edit/:eventId', component: EventEditComponent},
  ]
},
{
  path: 'order',
  children: [
    { path: 'index', component: OrderListComponent},
    { path: 'add', component: OrderAddComponent},
    { path: 'detail/:id', component: OrderDetailComponent},
    { path: 'edit/:id', component: OrderEditComponent},
  ]
},
{
  path: 'salesperson',
  children: [
    { path: 'index', component: SpIndexComponent},
    { path: 'add',   component: SpAddComponent },
    { path: 'edit/:id',   component: SpEditComponent },
    { path: 'delete/:id',   component: SpDeleteComponent },
  ]
},
 // Calendar Report
 {
  path: 'calendar-report', component: CrIndexComponent 
},
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
