import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      { id: 1, name: 'Car1' },
      { id: 2, name: 'Car2' },
      { id: 3, name: 'Car3' },
    ];
    return { cars };
  }
  constructor() {}
}
