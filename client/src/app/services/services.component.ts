import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth/auth.service';
import { ServicesRequestsServicesService } from '../services-requests-service/services-requests-services.service';
import { ServicesRequestsComponent } from '../services-requests/services-requests.component'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService,
    private service: ServicesRequestsServicesService,
    private authService: AuthService) { }

  ngOnInit(): void {

  }

  addService(service_name, price) {
    const editedPrice = `R$ ${price}`;
    this.service.addServices(service_name).subscribe((response: any) => {
      this.updateService(response.id);
      this.updateUser(response.id, service_name, editedPrice);
    });
  }

  updateService(id) {
    let shopObj = JSON.parse(this.cookie.get('Response'));
    this.http.put('/api/update_services', {
      'petshop_username': shopObj.username,
      'petshop_name': shopObj.name,
      'service_id': id
    }).subscribe(response => {});
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
    this.http.put('/api/update_users', obj)
      .subscribe(response => {
        let username = JSON.parse(this.cookie.get('Response')).username;
        let password = JSON.parse(this.cookie.get('Password'));
        this.authService.autenticateUser(username, password).subscribe( data => {
          if (data.boolean){
            this.cookie.delete('Response');
            this.cookie.delete('Password');
            this.cookie.set('Password', JSON.stringify(password), 1);
            this.cookie.set('Response', JSON.stringify(data.response), 1);
          }
          window.location.reload();
          })
      });
  }

  backPage() {
    this.router.navigate(['home']);
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
        window.location.reload();
      }
      window.location.reload();
    })
  }
}
