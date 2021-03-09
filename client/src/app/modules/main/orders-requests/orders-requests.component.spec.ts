import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersRequestsComponent } from './orders-requests.component';
import { ScheduledOrdersService } from '../../shared/services/scheduled-orders/scheduled-orders.service';
import { ScrollingModule } from '@angular/cdk/scrolling';

describe('OrdersRequestsComponent', () => {
  let component: OrdersRequestsComponent;
  let fixture: ComponentFixture<OrdersRequestsComponent>;
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

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ OrdersRequestsComponent],
      providers: [ {provide: ScheduledOrdersService, useValue: serviceStub} ],
      imports: [ScrollingModule]
    });

    fixture = TestBed.createComponent(OrdersRequestsComponent);
    component = fixture.debugElement.componentInstance;
    component.requestsArray = serviceStub.getData()

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get mockedData', () => {
    expect(component.orders).not.toContain(component.requestsArray[0]['petshop'].username);
  });

  /*
  it('should pass data from service to html page', () => {
    const htmlElement = fixture.debugElement.nativeElement;
    const content = htmlElement.querySelector('.col-8');
    console.log(content)
    expect(content.textContent).toContain(component.orders[0]['ClientName']);
  });
  */
});
