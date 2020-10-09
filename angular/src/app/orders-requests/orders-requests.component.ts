import { Component, OnInit } from '@angular/core';
import { ScheduledOrdersService } from '../scheduled-orders/scheduled-orders.service';

@Component({
  selector: 'app-orders-requests',
  templateUrl: './orders-requests.component.html',
  styleUrls: ['./orders-requests.component.scss']
})
export class OrdersRequestsComponent implements OnInit {

  orders : any;

  constructor(private service : ScheduledOrdersService) {
   }

  ngOnInit(): void {
    this.orders = this.service.GetInfo();
  }

}
