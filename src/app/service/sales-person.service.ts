import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SalesPerson } from '../Model/SalesPerson';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalesPersonService {

  apiEndpoint = environment.apiEndpoint + "/sales-person";
  salesPerson: SalesPerson;
  constructor(
    private http: HttpClient
  ) { }

  getSalesPersons(): Observable<SalesPerson[]> { 
    return this.http.get<SalesPerson[]>(this.apiEndpoint);
  }

  getSalesPersonById(id: Number): Observable<SalesPerson> { 
    return this.http.get<SalesPerson>(this.apiEndpoint + "/" + id);
  }

  insertSalesPerson(salesPerson: SalesPerson): Observable<any> { 
    return this.http.post(this.apiEndpoint, salesPerson);
  }

  updateSalesPerson(salesPerson: SalesPerson): Observable<any> { 
    return this.http.put(this.apiEndpoint, salesPerson);
  }

  deleteSalesPerson(id: Number): Observable<any> { 
    return this.http.delete(this.apiEndpoint + "/" + id);
  }


}
