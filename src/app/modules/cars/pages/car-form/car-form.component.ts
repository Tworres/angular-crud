import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarModel } from '../../models/Cars';
import { CarsService } from '../../services/cars.service';

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
    this.carsService.create(this.car).subscribe((c) => {
      this.goBack();
    });
  }

  delete(): void {
    this.carsService.delete(this.car).subscribe((c) => {
      this.goBack();
    });
  }
}
