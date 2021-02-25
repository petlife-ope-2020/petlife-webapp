import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesRequestsComponent } from './services-requests.component';

describe('ServicesRequestsComponent', () => {
  let component: ServicesRequestsComponent;
  let fixture: ComponentFixture<ServicesRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
