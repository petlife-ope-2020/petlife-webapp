import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth/auth.service';
import { ServicesRequestsServicesService } from '../services-requests-service/services-requests-services.service';

@Component({
  selector: 'app-services-requests',
  templateUrl: './services-requests.component.html',
  styleUrls: ['./services-requests.component.scss']
})
export class ServicesRequestsComponent implements OnInit {

  public providedServices: Array<object> = [];
  public notProvidedServices: Array<object> = [];
  allServices: Array<object>;
  providedServicesIds = [];

  constructor(private http: HttpClient, private cookie: CookieService,
    private service: ServicesRequestsServicesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getServiceRequest();
  }

  getServiceRequest(){
    this.service.searchServices().subscribe( (response: Array<object>) => {
      this.allServices = response;
      this.getProvidedServices();
    } );
  }

  getProvidedServices(){
    this.providedServices = JSON.parse(this.cookie.get('Response')).services;
    this.getProvidedServicesIds();
  }

  getProvidedServicesIds(){
    this.providedServices.forEach((element: any) => {
      this.providedServicesIds.push(element.service_id);
    });
    this.divideList();
  }

  divideList(){
    this.notProvidedServices = this.allServices;
    this.providedServices.forEach( (ownerService: any) => {
      this.allServices.forEach((service: any) => {
        if (ownerService.service_id === service._id){
          let index = this.allServices.indexOf(service);
          this.notProvidedServices.splice(index, 1);
        }
      });
    });
    this.providedServices = [...this.providedServices]
    this.notProvidedServices = [...this.notProvidedServices]
  }

  removeService(service_id){
    const petshop_username = JSON.parse(this.cookie.get('Response')).username;
    this.service.removeServices(service_id, petshop_username).subscribe(response => {
      this.UpdateCookie();
    });
  }

  addService(service_id, service_name, price) {
      this.updateUser(service_id, service_name, price);
      this.updateService(service_id);
  }

  updateService(id) {
    let shopObj = JSON.parse(this.cookie.get('Response'));
    this.http.put('/api/update_services', {
      'petshop_username': shopObj.username,
      'petshop_name': shopObj.name,
      'service_id': id
    }).subscribe(response => console.log(response));
  }

  updateUser(id, service_name, price) {
    let shopObj = JSON.parse(this.cookie.get('Response'));
    let pass = JSON.parse(this.cookie.get('Password'));
    let obj = {
      username: shopObj.username,
      password: pass,
      service_name: service_name,
      service_id: id,
      price: price
    }
    this.http.put('/api/update_users', obj).subscribe(response => response);
    this.UpdateCookie();
  }

  UpdateCookie(){
    let username = JSON.parse(this.cookie.get('Response')).username;
    let password = JSON.parse(this.cookie.get('Password'));
    this.authService.autenticateUser(username, password).subscribe( data => {
      if (data.boolean){
        this.cookie.delete('Response');
        this.cookie.delete('Password');
        this.cookie.set('Password', JSON.stringify(password), 1);
        this.cookie.set('Response', JSON.stringify(data.response), 1);
        console.log('Hello')
        window.location.reload();
      }
    })
  }
  
}
