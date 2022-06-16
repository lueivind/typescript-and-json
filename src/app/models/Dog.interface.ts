import { Color } from "./Color.enum";
import { IMeasurement } from "./Measurement.interface";

export interface IDog {
    ['Name']: string,
    ['Color']: Color,
    ['Weight']: IMeasurement,
    ['Number Of Teeth']: number;
}