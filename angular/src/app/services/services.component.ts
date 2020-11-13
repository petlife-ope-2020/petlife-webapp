import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServicesRequestsComponent } from '../services-requests/services-requests.component'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    
  }

  addService(service_name, price){
    this.http.post('/api/add_services', { service_name })
    .subscribe( (response: any) => {
      this.updateUser(response.id, service_name, price);
      this.updateService(response.id);
    });
  }

  updateService(id){
    let shopObj = JSON.parse(this.cookie.get('Response'));
    this.http.put('/api/update_services', {
      'petshop_username': shopObj.username,
      'petshop_name': shopObj.name,
      'service_id': id
    }).subscribe(response => console.log(response));
  }

  updateUser(id, service_name, price){
    let shopObj = JSON.parse(this.cookie.get('Response'));
    let pass = JSON.parse(this.cookie.get('Password'));
    let obj = {
      username: shopObj.username,
      password: pass,
      service_name: service_name,
      service_id: id,
      price: price
    }
    this.http.put('/api/update_users', obj)
    .subscribe(response => console.log(response));
  }

  backPage(){
    this.router.navigate(['home']);
  }
}
