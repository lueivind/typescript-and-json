import { MeasurementDto } from "../DTOs/MeasurementDto";
import { IDog } from "./Dog";
import { Color } from "./enums/Color";
import { IGiraffe } from "./Giraffe";
import { Measurement } from "./Measurement";

type AnimalPresenterType = IDog & IGiraffe;

export class AnimalPresenter implements AnimalPresenterType {
    name: string;
    color: Color;
    weight: Measurement;
    numberOfTeeth: number;
    neckLength: Measurement;
    numberOfSpots: number;

    constructor(dog?: IDog, giraffe?: IGiraffe) {
        this.name = dog?.name ?? giraffe?.name ?? "";
        this.color = dog?.color ?? giraffe?.color ?? Color.None;
        this.weight = dog?.weight ?? giraffe?.weight ?? new Measurement(<MeasurementDto>{});
        this.numberOfTeeth = dog?.numberOfTeeth ?? 0;
        this.neckLength = giraffe?.neckLength ?? new Measurement(<MeasurementDto>{});
        this.numberOfSpots = giraffe?.numberOfSpots ?? 0;
    }
}

