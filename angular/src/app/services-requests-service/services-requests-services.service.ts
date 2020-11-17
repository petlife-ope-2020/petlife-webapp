import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesRequestsServicesService {

  constructor(private http: HttpClient) { }

  searchServices(){
    return this.http.get('/api/get_services');
  }

  removeServices(service_id, petshop_username){
    return this.http.delete('/api/delete_services', {params: {
      petshop_username: petshop_username,
      service_id: service_id
    }});
  }

  addServices(service_name){
    return this.http.post('/api/add_services', { service_name })
  }
}