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
    this.getOrders();
  }

  createEvent(){
    this.requestsArray.forEach((element, index) => {
      if (element.schedule.confirmed) {
        this.orders.push(
          { 
            ClientName: element.client.name,
            PetName: element.client.pet.name,
            PetSpecie: element.client.pet.specie,
            PetBreed: element.client.pet.breed,
            PetAge: element.client.pet.age,
            Service: element.service.name,
            Date: element.schedule['date-time'],
            Id: element.order_id
          }
        )
        this.orders = [...this.orders]
      }
    });  
  }

  getOrders(){
    this.scheduledOrders.getData().subscribe( ( data:any ) => {
      this.requestsArray = data;
      this.createEvent();
    });
  }

  acceptOrder(id){
    let element;
    element = this.requestsArray.forEach(element => {
      if (element.id == id){
        element.schedule.confirmed = true;
        return element;
      }     
    });
    this.scheduledOrders.acceptOrder(element).subscribe();
  }

  refuseOrder(id){
    let element;
    element = this.requestsArray.forEach(element => {
      if (element.id == id){
        element.schedule.cancelled.status = true;
        element.schedule.cancelled.reason = "Not accepted!";
        return element;
      }     
    });
    this.scheduledOrders.refuseOrder(element).subscribe();
  }

}
