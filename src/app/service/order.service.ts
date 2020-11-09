import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../Model/Order';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiEndpoint = environment.apiEndpoint + "/orders";
  Order: Order;

  constructor(
    private http: HttpClient
  ) { }

  getAllOrders(filterParams?: HttpParams): Observable<Order[]> {  
    if(filterParams) { 
       return this.http.get<Order[]>(this.apiEndpoint, {params: filterParams});
    }
    return this.http.get<Order[]>(this.apiEndpoint);
  }

  getOrderById(id: Number): Observable<Order> { 
    return this.http.get<Order>(this.apiEndpoint + "/" + id);
  }

  insertOrder(Order: Order) : Observable<Order> {  console.log('Order_INSERT_SERVICE_DATA_SENDTOAPI', Order);
    return this.http.post<Order>(this.apiEndpoint, Order);
  }

  updateOrder(Order: Order): Observable<any> {   console.log('Order_UPDATE_SERVICE_DATA_SENDTOAPI', Order);
    return this.http.put(this.apiEndpoint, Order);
  }

  deleteOrder(id: Number): Observable<any> { 
    return this.http.delete(this.apiEndpoint + "/" + id);
  }

  getOrdersByCustomerId(_orderId: number): Observable<Order[]> { 
    const theEndpoint = this.apiEndpoint + '/customer/' + _orderId;
    return this.http.get<Order[]>(theEndpoint);
  }



}
