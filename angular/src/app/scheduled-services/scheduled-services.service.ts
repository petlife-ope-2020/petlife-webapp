import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduledServicesService {

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get('/api/get_services');
  };

  public updateServices() {
    return this.http.put('/api/update_services', {});
  };

  public deleteServices() {
    return this.http.delete('/api/delete_services', {});
  };

  public addServices() {
    return this.http.post('/api/add_services', {});
  };
}
