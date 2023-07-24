import { MetricsEntity } from "../entities/entities";

/**
 * 
 * @namespace MetricsRepository
 * @description this is the Grafana Custom Metrics Repository that will deal with data storage.
 * 
 */

export interface MetricsRepository { 
    findall(): Promise<MetricsEntity[] | MetricsEntity | undefined>;
    findById(id: string): Promise<MetricsEntity[] | MetricsEntity | undefined>;
    save(metricsEntity: MetricsEntity): Promise<MetricsEntity[] | void>;
}