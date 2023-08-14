import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Observable } from 'rxjs';
import { Car } from '../interfaces';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  cars!: Observable<Car[]>;
  constructor(private carsService: CarsService) {}

  getCars(): Observable<Car[]> {
    return this.carsService.getCars();
  }

  ngOnInit(): void {
    this.cars = this.getCars();
  }
}
