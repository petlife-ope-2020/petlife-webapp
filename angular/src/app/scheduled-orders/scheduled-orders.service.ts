import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduledOrdersService {

  private mockedInfomation = [
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
    },
  {
    "petshop": {
        "username": "petshopsp",
        "name":"PetShop Sao Paulo"
    },
    "service": {
        "id": "2",
        "name": "Vacinaca"
    },
    "client": {
      "username": "angelasouza",
      "name": "Angela Souza",
      "pet": {
        'name' : 'Fofinho',
        'specie' : 'Gato',
        'breed' : 'Egipcio',
        'age' : '3',
      }
    },
    "schedule": {
        "date-time": "2020-10-07T12:30:00",
        "confirmed": "true",
        "cancelled": {
            "status": "false",
            "reason": null
        }
      }
    }
  ];

  constructor() { }

  public getData() {
    return this.mockedInfomation;
  };
  
}
