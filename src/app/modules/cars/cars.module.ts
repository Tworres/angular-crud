import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './pages/cars/cars.component';
import { CarFormComponent } from './pages/car-form/car-form.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarsComponent, CarFormComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule],
})
export class CarsModule {}
