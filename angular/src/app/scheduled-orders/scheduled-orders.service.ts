import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduledOrdersService {

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get('/api/get_orders', {params: {username: 'username'}});
  }

  public acceptOrder(id){
    return this.http.put('/api/accept_orders', {id});
  }

  public refuseOrder(id){
    return this.http.delete('/api/refuse_orders',
    {
      params: { id }
    });
  };
}
