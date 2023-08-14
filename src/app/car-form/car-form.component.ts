import { Component, Input, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../interfaces';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cars-details',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
})
export class CarFormComponent implements OnInit {
  car!: CarModel;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getCar(id);
  }

  getCar(id: number | undefined): void {
    if (id) {
      this.carsService
        .getCar(id)
        .subscribe((c) => (this.car = new CarModel(c.id, c.name)));
    } else {
      this.car = new CarModel();
    }
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.carsService.update(this.car).subscribe(() => {
      this.goBack();
    });
  }

  create(): void {
    console.log(this.car);
    this.carsService.create(this.car).subscribe((c) => {
      console.log(c);
      this.goBack();
    });
  }
}

class CarModel implements Car {
  constructor(public id: number | null = null, public name: string = '') {}
}
