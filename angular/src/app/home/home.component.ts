import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private selectedEvent: any;
  private selectedEventId: any;
  private eventsArray = [
    { id : '1', title: 'event 1', date: '2020-10-01' },
    { id : '2', title: 'event 2', date: '2020-10-03' },
    { id : '3', title: 'event 3', date: '2020-10-02' }
  ]

  constructor() { }
  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    selectable: true,
    weekends: true,
    events: this.eventsArray ,
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      right: 'deleteButton prevYear,prev,next,nextYear'
    },
    footerToolbar: {

    },
    customButtons: {
      deleteButton:{
        text: 'Delete',
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

  removeEvent (){
    this.selectedEvent.remove();
    this.eventsArray.forEach(element => {
      if(element['id'] === this.selectedEventId){
        const elementIndex = this.eventsArray.indexOf(element);
        this.eventsArray.splice(elementIndex, 1);;
      }
    });
    
  }
}
