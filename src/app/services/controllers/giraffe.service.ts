import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GiraffeDto } from 'src/app/DTOs/GiraffeDto';
import { Giraffe } from 'src/app/models/Giraffe';

@Injectable({
  providedIn: 'root'
})
export class GiraffeService {

  giraffes: BehaviorSubject<Giraffe[]> = new BehaviorSubject<Giraffe[]>([]);

  private _baseUrl: string = "http://localhost:3002/";

  constructor(private _httpClient: HttpClient) {
    this.getGiraffes();
  }

  getGiraffes(): void {
    setInterval(() => {
      this._httpClient.get<GiraffeDto[]>(this._baseUrl + "giraffes").subscribe(giraffeDtos => {

        const newGiraffes = giraffeDtos.map(giraffeDto => new Giraffe(giraffeDto));
        this.giraffes.next(newGiraffes);
      });
    }, 3000);
  }
}
