import { MetricsEntity } from "../../../../../qrMonster/domain/metrics/entities/entities";

it('test_constructor_sets_metric_name_and_value_correctly', () => {
    const metricsEntity = new MetricsEntity({ metricName: 'metric1', value: 'value1' });
    expect(metricsEntity.metricName).toBe('metric1');
    expect(metricsEntity.value).toBe('value1');
});

it('test_is_valid_returns_true_when_metric_name_and_value_are_present', () => {
    const metricsEntity = new MetricsEntity({ metricName: 'metric1', value: 'value1' });
    expect(metricsEntity.isValid()).toBe(true);
});

// it('test_is_valid_returns_false_when_metric_name_is_missing', () => {
//     const metricsEntity = new MetricsEntity({ value: 'value1' });
//     expect(metricsEntity.isValid()).toBe(false);
// });

// it('test_is_valid_returns_false_when_value_is_missing', () => {
//     const metricsEntity = new MetricsEntity({ metricName: 'metric1' });
//     expect(metricsEntity.isValid()).toBe(false);
// });

// it('test_is_valid_returns_false_when_both_metric_name_and_value_are_missing', () => {
//     const metricsEntity = new MetricsEntity({});
//     expect(metricsEntity.isValid()).toBe(false);
// });

// it('test_is_valid_throws_metrics_errors_when_missing_attributes', () => {
//     const metricsEntity = new MetricsEntity({});
//     expect(() => metricsEntity.isValid()).toThrow(MetricsErrors);
// });