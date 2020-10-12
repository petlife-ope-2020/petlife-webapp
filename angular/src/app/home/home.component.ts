import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { ScheduledOrdersService } from '../scheduled-orders/scheduled-orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private selectedEvent: any;
  private selectedEventId: any;
  private eventsArray = [
    { id : '1', title: 'Consulta 1', start: '2020-10-06T12:30:00' },
    { id : '2', title: 'Consulta 2', start: '2020-10-06T08:30:00' },
    { id : '3', title: 'Consulta 3', start: '2020-10-07T12:30:00' }
  ]
  private requestsArray: Array<any>;

  constructor(private scheduledOrders : ScheduledOrdersService) {  }
  
  ngOnInit(): void {
    this.requestsArray = this.scheduledOrders.getData();
    this.createEvent();
  }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    selectable: true,
    weekends: true,
    events: this.eventsArray ,
    //schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      right: 'cancelButton prevYear,prev,next,nextYear'
    },
    footerToolbar: {

    },
    customButtons: {
      cancelButton:{
        text: 'Cancelar',
        click: () => {
          this.removeEvent();
        }
      },
    },
    eventClick: (info) => {
      this.selectedEvent = info.event;
      this.selectedEventId = info.event.id;
    }
  };

  removeEvent(){
    this.selectedEvent.remove();
    this.eventsArray.forEach(element => {
      if(element['id'] === this.selectedEventId){
        const elementIndex = this.eventsArray.indexOf(element);
        this.eventsArray.splice(elementIndex, 1);;
      }
    });
  }

  createEvent(){
    this.requestsArray.forEach(element => {
      if (element.schedule.confirmed) {
        this.eventsArray.push(
          { id : this.requestsArray.indexOf(element).toString(), title: element.client.name, start: element.schedule["date-time"]}
        )
      }
    });  
  }

}
