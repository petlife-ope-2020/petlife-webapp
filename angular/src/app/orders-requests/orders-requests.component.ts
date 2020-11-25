import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { interval } from 'rxjs';
import { ScheduledOrdersService } from '../scheduled-orders/scheduled-orders.service';

@Component({
  selector: 'app-orders-requests',
  templateUrl: './orders-requests.component.html',
  styleUrls: ['./orders-requests.component.scss']
})
export class OrdersRequestsComponent implements OnInit {

  requestsArray = [];
  orders = [];
  isVisible = true;

  constructor(private scheduledOrders: ScheduledOrdersService, private cookie: CookieService) {
  }

  ngOnInit(): void {
    this.getOrders();
    interval(120000).subscribe( () => {
      this.getOrders();
    });
  }

  createEvent() {
    this.requestsArray.forEach(element => {
      if ((!element.status.confirmed && !element.status.rejected)) {
        const year = element.schedule.datetime.slice(0, 4);
        const month = element.schedule.datetime.slice(5, 7);
        const day = element.schedule.datetime.slice(8, 10);
        const hour = (element.schedule.datetime.slice(11).replace('-', ':'));
        const date = hour.concat(' ', day, '/', month, '/', year)
        this.orders.push(
          {
            ClientName: element.client.name,
            PetName: element.client.pet.name,
            PetSpecie: element.client.pet.species,
            PetBreed: element.client.pet.breed,
            PetAge: element.client.pet.age_years,
            Service: element.service.name,
            Date: date,
            Id: element._id
          }
        );
        this.orders = [...this.orders];
      }
    });
  }

  getOrders() {
    const username = JSON.parse(this.cookie.get('Response')).username;
    this.scheduledOrders.getData(username).subscribe((data: any) => {
      this.requestsArray = data;
      this.createEvent();
    });
  }

  acceptOrder(id) {
    this.scheduledOrders.acceptOrder(id).subscribe(response => {
      window.location.reload();
    })
  }

  refuseOrder(id) {
    this.scheduledOrders.refuseOrder(id).subscribe(response => {
      window.location.reload();
    })
  }
}
