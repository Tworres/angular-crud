import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/Cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  cars!: Car[];
  constructor(private carsService: CarsService) {}

  getCars(): void {
    debugger;
    this.carsService.getCars().subscribe((cars) => {
      debugger;
      this.cars = cars;
    });
  }

  ngOnInit(): void {
    this.getCars();
  }

  delete(car: Car): void {
    this.cars = this.cars.filter((c) => c !== car);
    this.carsService.delete(car).subscribe();
  }
}
