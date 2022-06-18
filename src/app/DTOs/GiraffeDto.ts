import { MeasurementDto } from "./MeasurementDto";
import { Color } from "../models/enums/Color";

export interface GiraffeDto {
    ['Name']: string,
    ['Color']: Color,
    ['Weight']: MeasurementDto,
    ['Neck Length']: MeasurementDto,
    ['Number Of Spots']: number;
}