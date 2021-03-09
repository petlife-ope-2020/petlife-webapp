import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduledOrdersService } from '../../shared/services/scheduled-orders/scheduled-orders.service'

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let serviceStub: Partial<ScheduledOrdersService>;

  serviceStub = {
    getData : () => {
      return[
        {
          "petshop": {
              "username": "petshopsp",
              "name":"PetShop Sao Paulo"
          },
          "service": {
            "id": "1",
            "name": "Tosa"
          },
          "client": {
            "username": "ericrossi",
            "name": "Eric Rossi",
            "pet": {
              'name' : 'Alberto',
              'specie' : 'Cachorro',
              'breed' : 'Labrador',
              'age' : '10',
            }
          },
          "schedule": {
            "date-time": "2020-10-06T12:30:00",
            "confirmed": "true",
            "cancelled": {
                "status": "false",
                "reason": null
            }
          }
        }
      ]
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{provide: ScheduledOrdersService, useValue: serviceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the data to create the calendar events', () => {
    expect()
  });

});
