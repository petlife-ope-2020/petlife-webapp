import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduledOrdersService {

  private mockedInfomation = [
    { 
      'ClientName' : 'Allan',
      'PetName' : 'Alberto',
      'PetSpecie' : 'Cachorro',
      'PetBreed' : 'Labrador',
      'PetAge' : '10',
      'Service' : 'Vacinação',
      'Date' : 'Sexta',
      'Time' : '18:00'
    },
    { 
      'ClientName' : 'Eric',
      'PetName' : 'Rex',
      'PetSpecie' : 'Passarinho',
      'PetBreed' : 'Papagaio',
      'PetAge' : '3',
      'Service' : 'Banho e Tosa',
      'Date' : 'Sexta',
      'Time' : '18:00'
    },
    { 
      'ClientName' : 'Angela',
      'PetName' : 'Ferdinando',
      'PetSpecie' : 'Touro',
      'PetBreed' : 'Corno',
      'PetAge' : '14',
      'Service' : 'Banho',
      'Date' : 'Sexta',
      'Time' : '18:00'
    },
    { 
      'ClientName' : 'Isabela',
      'PetName' : 'Fofinho',
      'PetSpecie' : 'Gato',
      'PetBreed' : 'Egipcio',
      'PetAge' : '5',
      'Service' : 'Banho e Tosa',
      'Date' : 'Sexta',
      'Time' : '18:00'
    }
  ];

  constructor() { }

  public GetInfo() {
    return this.mockedInfomation;
  };
  
}
