import { Color } from "./Color.enum";
import { IMeasurement } from "./Measurement.interface";

export interface IGiraffe {
    ['Name']: string,
    ['Color']: Color,
    ['Weight']: IMeasurement,
    ['Neck Length']: IMeasurement,
    ['Number of Spots']: number;
}