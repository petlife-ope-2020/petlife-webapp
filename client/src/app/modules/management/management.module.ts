import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesRequestsComponent } from './services-requests/services-requests.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    ServicesComponent,
    ProfileComponent,
    ServicesRequestsComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagementModule { }
