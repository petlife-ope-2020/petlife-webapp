import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CookieService } from 'ngx-cookie-service';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrdersRequestsComponent } from './orders-requests/orders-requests.component';
import { RegisterComponent } from './register/register.component';

import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  resourceTimelinePlugin,
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    OrdersRequestsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    ScrollingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CookieService],
})
export class MainModule { }
