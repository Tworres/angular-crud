export interface Car {
  id: number | null;
  name: string;
}

export class CarModel implements Car {
  constructor(public id: number | null = null, public name: string = '') {}
}
