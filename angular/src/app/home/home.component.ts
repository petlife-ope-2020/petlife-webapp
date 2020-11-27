import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { ScheduledOrdersService } from '../scheduled-orders/scheduled-orders.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private scheduledOrders: ScheduledOrdersService, private cookie: CookieService, private route: Router) { }

  loggedUser: string;
  private selectedEvent: any;
  private selectedEventId: any;
  private eventsArray: Array<any> = [];
  public requestsArray: Array<any>;

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    selectable: true,
    weekends: true,
    events: this.eventsArray,
    locale: 'pt-br',
    titleFormat: { day: 'numeric',  month: 'short', year: 'numeric'},
    allDaySlot: false,
    slotDuration: '01:00:00',
    nowIndicator: true,
    expandRows: true,
    buttonText: {
      today:    'Hoje',
      month:    'Mês',
      week:     'Semana',
      day:      'Dia',
      list:     'Lista'
    },
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    headerToolbar: {
      left: 'timeGridDay,timeGridWeek,dayGridMonth',
      center: 'title',
      right: 'cancelButton prev,next'
    },
    customButtons: {
      cancelButton: {
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

  ngOnInit(): void {
    const responseLogin = JSON.parse(this.cookie.get('Response'));
    this.loggedUser = responseLogin.username;
    this.getOrders();
  }

  removeEvent() {
    this.selectedEvent.remove();
    this.eventsArray.forEach(element => {
      if (element['id'] === this.selectedEventId) {
        const elementIndex = this.eventsArray.indexOf(element);
        this.eventsArray.splice(elementIndex, 1);
        this.scheduledOrders.refuseOrder(this.selectedEventId)
        .subscribe(response => response);
      }
    });
  }

  createEvent() {
    this.requestsArray.forEach(element => {
      if (element.status.confirmed && !element.status.rejected) {
        let date = element.schedule.datetime.slice(0, 10);
        let time = element.schedule.datetime.slice(11).replace('-', ':');
        let datetime = date.concat('T', time, ':00');
        this.eventsArray.push(
          {
            id: element._id,
            title: element.client.name,
            start: datetime
          }
        )
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

}
