import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-requests',
  templateUrl: './services-requests.component.html',
  styleUrls: ['./services-requests.component.scss']
})
export class ServicesRequestsComponent implements OnInit {

  public servicos: Array<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.servicos = [{'name': 'Tosa', price: '19,00'}, {name: 'Banho', price: '19,00'}]
  }

  removeService(id){
    this.http.delete('', {}).subscribe();
  }

}
