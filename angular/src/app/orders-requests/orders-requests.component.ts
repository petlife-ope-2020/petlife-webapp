import { Component, OnInit } from '@angular/core';
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

  constructor(private scheduledOrders : ScheduledOrdersService) {
   }

  ngOnInit(): void {
    this.requestsArray = this.scheduledOrders.getData();
    this.createEvent()
  }

  createEvent(){
    this.requestsArray.forEach(element => {
      if (element.schedule.confirmed) {
        this.orders.push(
          { 
            ClientName: element.client.name,
            PetName: element.client.pet.name,
            PetSpecie: element.client.pet.specie,
            PetBreed: element.client.pet.breed,
            PetAge: element.client.pet.age,
            Service: element.service.name,
            Date: element.schedule['date-time']
          }
        )
        this.orders = [...this.orders]
      }
    });  
  }

}
