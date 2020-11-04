import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduledOrdersService {

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get('/api/get_orders');
  };
  
  public acceptOrder(element){
    return this.http.put('/api/accept_orders', 
    {
      "order": element
    });
  };

  public refuseOrder(element){
    return this.http.put('/api/refuse_orders',
    {
      "order": element
    });
  };
}
