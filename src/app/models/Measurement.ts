import { MeasurementDto } from "../DTOs/MeasurementDto";

export class Measurement {
    numericValue: number;
    unit: string;

    constructor(measurement: MeasurementDto) {
        this.numericValue = measurement["Numeric Value"];
        this.unit = measurement.Unit;
    }

    public static toDto(measurement: Measurement): MeasurementDto {
        const dto = <MeasurementDto>{};
        dto["Numeric Value"] = measurement.numericValue;
        dto.Unit = measurement.unit;
        return dto;
    }
}