import { GiraffeDto } from "../DTOs/GiraffeDto";
import { Color } from "./enums/Color";
import { Measurement } from "./Measurement";

export interface IGiraffe {
    name: string;
    color: Color;
    weight: Measurement;
    neckLength: Measurement;
    numberOfSpots: number;
}

export class Giraffe implements IGiraffe {
    name: string;
    color: Color;
    weight: Measurement;
    neckLength: Measurement;
    numberOfSpots: number;

    constructor(giraffe: GiraffeDto) {
        this.name = giraffe.Name;
        this.color = giraffe.Color;
        this.weight = new Measurement(giraffe.Weight);
        this.neckLength = new Measurement(giraffe["Neck Length"]);
        this.numberOfSpots = giraffe["Number Of Spots"];
    }

    public static toDto(giraffe: Giraffe): GiraffeDto {
        const dto = <GiraffeDto>{};
        dto.Color = giraffe.color;
        dto.Name = giraffe.name;
        dto["Neck Length"] = Measurement.toDto(giraffe.neckLength);
        dto["Number Of Spots"] = giraffe.numberOfSpots;
        dto.Weight = Measurement.toDto(giraffe.weight);
        return dto;
    }
}