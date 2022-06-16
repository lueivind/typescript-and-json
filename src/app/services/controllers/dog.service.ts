import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDog } from 'src/app/models/Dog.interface';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  public get dogs(): BehaviorSubject<IDog[]> {
    return this._dogs;
  }

  private _baseUrl: string = "http://localhost:3002/";
  private _dogs: BehaviorSubject<IDog[]> = new BehaviorSubject<IDog[]>([]);

  constructor(private _httpClient: HttpClient) { }

  getDogs(): BehaviorSubject<IDog[]> {
    setInterval(() => {
      this._httpClient.get<IDog[]>(this._baseUrl + "shoes").subscribe(dogs => {
        this._dogs.next(dogs);
      });
    }, 3000);
  }

}
