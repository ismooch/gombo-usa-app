import { Injectable } from '@angular/core';
import { Customer } from '../Model/Customer';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiEndpoint = environment.apiEndpoint + "/customers";
  customer: Customer;
  constructor(
    private http: HttpClient
  ) { }

  getCustomers(filterValue?: string): Observable<Customer[]> { 
    if(filterValue) {
      let params = new HttpParams().set('filterValue', filterValue);
      return this.http.get<Customer[]>(this.apiEndpoint, {params: params});
    }
    return this.http.get<Customer[]>(this.apiEndpoint);
  }

  getCustomerById(id: Number): Observable<Customer> { 
    return this.http.get<Customer>(this.apiEndpoint + "/" + id);
  }

  insertCustomer(customer: Customer): Observable<any> { console.log('CUSTOMER_INSERT_SERVICE_DATA_SENDTOAPI', customer);
    return this.http.post(this.apiEndpoint, customer);
  }

  updateCustomer(customer: Customer): Observable<any> { console.log('CUSTOMER_UPDATE_SERVICE_DATA_SENDTOAPI', customer);
    return this.http.put(this.apiEndpoint, customer);
  }

  deleteCustomer(id: Number): Observable<any> { 
    return this.http.delete(this.apiEndpoint + "/" + id);
  }


}
