import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Car } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  httpUrl = 'api/cars';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    const cars = this.http.get<Car[]>(this.httpUrl);
    return cars;
  }

  getCar(id: number): Observable<Car> {
    const url = this.httpUrl + '/' + id;
    const car = this.http.get<Car>(url);
    return car;
  }

  create(car: Car): Observable<any> {
    return this.http
      .post(this.httpUrl, car, this.httpOptions)
      .pipe(catchError(this.handleError<any>('createCar')));
  }

  update(car: Car): Observable<any> {
    return this.http
      .put(this.httpUrl, car, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateCar')));
  }

  delete(car: Car): Observable<any> {
    debugger;
    const url = this.httpUrl + '/' + car.id;
    return this.http
      .delete(url, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateCar')));
  }
}
