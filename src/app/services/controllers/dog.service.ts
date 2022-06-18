import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DogDto } from 'src/app/DTOs/DogDto';
import { Dog } from 'src/app/models/Dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  dogs: BehaviorSubject<Dog[]> = new BehaviorSubject<Dog[]>([]);

  private _baseUrl: string = "http://localhost:3002/";

  constructor(private _httpClient: HttpClient) {
    this.getDogs();
  }

  getDogs(): void {
    setInterval(() => {
      this._httpClient.get<DogDto[]>(this._baseUrl + "dogs").subscribe(dogDtos => {
        const newDogs = dogDtos.map(dogDto => new Dog(dogDto));
        this.dogs.next(newDogs);
      });
    }, 3000);
  }

}
