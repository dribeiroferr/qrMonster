import { MetricsErrors } from "../errors/errors"
import { IMetricsDTO } from "../dtos/metricsDTO"
import { MetricsErrorsNameType, getErrorMessage } from "../utils/enums";

/**
 * 
 * @namespace MetricsEntity
 * @description Grafana Metrics Entity class
 * @class
 * @param metricName The name of the metric that needs to be implemented or refferenced.
 * @param value The value of the metric
 * 
 */
export class MetricsEntity { 
    public metricName: string;
    public value: string;

    constructor({
        metricName, 
        value
    }: IMetricsDTO){
        this.metricName = metricName,
        this.value = value
    }

    public isValid(): boolean { 
        try {
            this.metricName ?? (() => { throw new MetricsErrors('MetricNameMissing', 'MetricsError', 'BadRequest')});
            this.value ?? (() => { throw new MetricsErrors('ValueMissing', 'MetricsError', 'BadRequest')});
            !this.metricName && !this.value ? (() => { throw new MetricsErrors('AllAttributesIsMissing', 'MetricsError', 'BadRequest')}) : true;
            return true
        } catch (error) {
            if(error instanceof MetricsErrors){
                const errorMessage = getErrorMessage(error.name as MetricsErrorsNameType);
                console.log(errorMessage);
            }
            console.error(error);
            return false;
        }
    }
}