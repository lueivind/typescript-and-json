import { Component, OnInit } from '@angular/core';
import { AnimalPresenter } from 'src/app/models/AnimalPresenter';
import { Dog } from 'src/app/models/Dog';
import { Giraffe } from 'src/app/models/Giraffe';
import { DogService } from 'src/app/services/controllers/dog.service';
import { GiraffeService } from 'src/app/services/controllers/giraffe.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  // animals as dogs and giraffes
  // (example for keeping classes seperate)
  animals: Array<Dog & Giraffe> = [];

  // animals as animalpresenter
  // (example for creating a presenter class)
  animalPresenters: Array<AnimalPresenter> = [];

  private dogs: Array<Dog> = [];
  private giraffes: Array<Giraffe> = [];

  constructor(
    private dogService: DogService,
    private giraffeService: GiraffeService
  ) { }

  ngOnInit(): void {

    this.dogService.dogs.subscribe(dogs => {
      this.dogs = dogs;
      this.updateAnimals();
    });

    this.giraffeService.giraffes.subscribe(giraffes => {
      this.giraffes = giraffes;
      this.updateAnimals();
    });

  }

  private updateAnimals(): void {

    this.animals = <any>this.dogs.concat(<any>this.giraffes);

    const dogs = this.dogs.map(dog => new AnimalPresenter(dog));
    const giraffes = this.giraffes.map(giraffe => new AnimalPresenter(undefined, giraffe));
    this.animalPresenters = dogs.concat(giraffes);
  }

}
