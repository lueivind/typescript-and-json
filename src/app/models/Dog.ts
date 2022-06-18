import { DogDto } from "../DTOs/DogDto";
import { Color } from "./enums/Color";
import { Measurement } from "./Measurement";

export interface IDog {
    name: string,
    color: Color;
    weight: Measurement;
    numberOfTeeth: number;
}

export class Dog implements IDog {

    name: string;
    color: Color;
    weight: Measurement;
    numberOfTeeth: number;

    constructor(dog: DogDto) {
        this.name = dog.Name;
        this.color = dog.Color;
        this.weight = new Measurement(dog.Weight);
        this.numberOfTeeth = dog["Number Of Teeth"];
    }

    public static toDto(dog: Dog): DogDto {
        const dto = <DogDto>{};
        dto.Color = dog.color;
        dto.Name = dog.name;
        dto["Number Of Teeth"] = dog.numberOfTeeth;
        dto.Weight = Measurement.toDto(dog.weight);
        return dto;
    }
}

