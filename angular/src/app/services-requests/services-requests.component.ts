import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { element } from 'protractor';

@Component({
  selector: 'app-services-requests',
  templateUrl: './services-requests.component.html',
  styleUrls: ['./services-requests.component.scss']
})
export class ServicesRequestsComponent implements OnInit {

  public servicos: any;
  private nameUserPetShop: any;
  private array: any;

  constructor(private http: HttpClient, private cookie: CookieService) { }

  ngOnInit(): void {
    this.array = []
    this.servicos = []
    this.nameUserPetShop = {
      petshop_username: JSON.parse(this.cookie.get('Response'))['username'], 
      petshop_name: JSON.parse(this.cookie.get('Response'))['name']
    };
    this.getServiceRequest();
  }

  getServiceRequest(){
    this.http.get('/api/get_services').subscribe( (response :any) => {
      response.forEach(element1 => {

        JSON.parse(this.cookie.get('Response')).services.forEach(element2 => {
          if (element2.service_id == element1._id){
            let dict = {
              service_id: element1.service_id,
              name: element1.service_name,
              price: element2.price,
              color: 'green'
            }
            this.addArray(dict)
          }else {
            let dict = {
              service_id: element1._id,
              name: element1.service_name,
              price: 'N/A',
              color: 'red'
            }
            this.addArray(dict)
          }
          
        })   

      })
      this.servicos = [...this.servicos]
    })
  }

  removeService(service_id){
    let petshop_username = JSON.parse(this.cookie.get('response')['username']);
    this.http.request('DELETE', '/api/delete_services', {body: {service_id, petshop_username}})
    .subscribe(response => {});
  }

  addArray(dict){
    this.servicos.push(dict);
  }
}
