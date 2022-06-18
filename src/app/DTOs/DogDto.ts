import { Color } from "../models/enums/Color";
import { MeasurementDto } from "./MeasurementDto";

export interface DogDto {
    ['Name']: string,
    ['Color']: Color,
    ['Weight']: MeasurementDto,
    ['Number Of Teeth']: number;
}
