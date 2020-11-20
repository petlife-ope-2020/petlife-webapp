import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import { HttpClientModule } from '@angular/common/http';

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { OrdersRequestsComponent } from './orders-requests/orders-requests.component';
import { RegisterComponent } from './register/register.component';

import {CookieService } from 'ngx-cookie-service';
import { ServicesRequestsComponent } from './services-requests/services-requests.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  resourceTimelinePlugin,
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ServicesComponent,
    PageNoFoundComponent,
    OrdersRequestsComponent,
    RegisterComponent,
    ServicesRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
