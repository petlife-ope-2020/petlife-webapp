import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersRequestsComponent } from './orders-requests.component';
import { GetOrderInfoService } from './get-order-info.service';

describe('OrdersRequestsComponent', () => {
  let component: OrdersRequestsComponent;
  let fixture: ComponentFixture<OrdersRequestsComponent>;
  let serviceStub: Partial<GetOrderInfoService>;

  serviceStub = {
    GetInfo : () => {
      return[
        { 
          ClientName : 'Allan',
          PetName : 'Alberto',
          PetSpecie : 'Cachorro',
          PetBreed : 'Labrador',
          PetAge : '10',
          Service : 'Vacinação',
          Date : 'Sexta',
          Time : '18:00'
        },
        { 
          ClientName : 'Eric',
          PetName : 'Rex',
          PetSpecie : 'Passarinho',
          PetBreed : 'Papagaio',
          PetAge : '3',
          Service : 'Banho e Tosa',
          Date : 'Sexta',
          Time : '18:00'
        }
      ]
    }
  };

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ OrdersRequestsComponent ],
      providers: [ {provide: GetOrderInfoService, useValue: serviceStub} ]
    });

    fixture = TestBed.createComponent(OrdersRequestsComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get mockedData', () => {
    expect(component.orders).toEqual(serviceStub.GetInfo());
  });

  it('should pass data from service to html page', () => {
    const htmlElement = fixture.debugElement.nativeElement;
    const content = htmlElement.querySelector('.col-8');
    expect(content.textContent).toContain(component.orders[0]['ClientName']);
  });
});
