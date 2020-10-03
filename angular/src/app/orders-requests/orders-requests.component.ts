import { Component, OnInit } from '@angular/core';
import { GetOrderInfoService } from 'src/app/orders-requests/get-order-info.service';

@Component({
  selector: 'app-orders-requests',
  templateUrl: './orders-requests.component.html',
  styleUrls: ['./orders-requests.component.scss']
})
export class OrdersRequestsComponent implements OnInit {

  orders : any;

  constructor(private service : GetOrderInfoService) {
   }

  ngOnInit(): void {
    this.orders = this.service.GetInfo();
  }

}
