/**
 * 
 * @enums Metrics Errors enums
 * @description This file contains predefined enums that help us implement our features at development
 * 
 * 
 */

const metricsErrorsName = { 
  // Data Source Connection Errors
  DataSourceNotFound :'Data source not found',
  DataSourceConnectionError :'Unable to connect to data source',
  DataSourceAuthenticationError :'Authentication failed',

  // Query Errors
  QuerySyntaxError :'Query syntax error',
  InvalidQueryParameter :'Invalid query parameter',
  QueryTimeout :'Query timeout',

  // Dashboard Configuration Errors
  PanelNotFound :'Panel not found',
  InvalidDashboardConfiguration :'Invalid dashboard configuration',
  DashboardNotFound :'Dashboard not found',

  // Plugin Errors
  PluginLoadFailed :'Plugin failed to load',
  PluginCompatibilityError :'Plugin compatibility issues',
  PluginNotFound :'Plugin not found',

  // Authentication and Authorization Errors
  UserNotAuthenticated :'User not authenticated',
  AccessDenied :'Access denied',
  InvalidCredentials :'Invalid credentials',

  // Data Display Errors
  DataNotDisplaying :'Data not displaying',
  PanelRenderingError :'Panel rendering error',
  InvalidDataFormat :'Invalid data format',

  // Alerting Errors
  AlertRuleCreationFailed :'Failed to create an alert rule',
  AlertNotificationFailed :'Alert notification failed',
  AlertRuleConditionsError :'Error in alert rule conditions',

  // Backend Server Errors
  InternalServerError :'Internal server error',
  ServerStartupFailed :'Failed to start Grafana server',
  BackendNotResponding :'Backend service not responding',

  // Frontend UI Errors
  UIComponentError :'UI component error',
  JavaScriptError :'JavaScript error',
  UIRenderingIssues :'UI rendering issues',

  // Configuration Errors
  InvalidConfigurationSettings :'Invalid configuration settings',
  MissingRequiredConfiguration :'Missing required configuration',

  // Network and Connectivity Errors
  ConnectionFailed :'Failed to establish a connection',
  NetworkTimeout :'Network timeout',
  ConnectionRefused :'Connection refused',

  // Entity Attributes Missing Errors
  MetricNameMissing: 'Metric name attribute is missing in MetricsEntity',
  ValueMissing: 'Value attribute is missing in MetricsEntity',
  AllAttributesIsMissing: 'All attributes is missing in MetricsEntity'


} as const;

const metricsErrorsCodes = { 
    BadRequest : '400',
    Forbidden : '403',
    NotFound : '404',
    Conflict : '409',
    InternalServerError: '500'
} as const;

const metricsErrorsMessages = { 
    MetricsError : metricsErrorsName, 
    ConditionAlreadySatisfied : 'ALREADY SATISFIED', 
    NotFound : 'NOT FOUND'
} as const;

export type MetricsErrorsNameType = keyof typeof metricsErrorsName;
export type MetricsErrorsCodesType = keyof typeof metricsErrorsCodes;
export type MetricsErrorsMessagesType = keyof typeof metricsErrorsMessages;