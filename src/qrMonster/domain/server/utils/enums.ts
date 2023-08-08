/**
 * 
 * @enums Server Errors enums
 * @description This file contains predefined enums that help us implement our features at development
 * 
 * 
 */

const serverErrorsNames = { 
  // Backend Server Errors
  InternalServerError :'Internal server error',
  ServerStartupFailed :'Failed to start Grafana server',
  BackendNotResponding :'Backend service not responding',

  // Configuration Errors
  InvalidConfigurationSettings :'Invalid configuration settings',
  MissingRequiredConfiguration :'Missing required configuration',

  // Network and Connectivity Errors
  ConnectionFailed :'Failed to establish a connection',
  NetworkTimeout :'Network timeout',
  ConnectionRefused :'Connection refused',

  // Entity Attributes Missing Errors
  ServerIdIsMissing: 'Server ID attribute is missing in ServerEntity',
  ServerPortIsMissing: 'Server Port attribute is missing in ServerEntity',
  ServerMaxConnectionsIsMissing: 'All attributes is missing in ServerEntity',

  // Middleware Errors:
  MiddlewareSetupHasFailed: 'Middleware setup has failed to initialized',
  MiddlewareLogRequestsHasFailed: 'Middleware log request has failed',
  MiddlewareHandlingRequestsFailed: 'Middleware is not handling requests',

  // Router Errors:
  RouterV1SetupHasFailed: 'Router V1 setup has failed to initialized',

  // Repository Errors: 
  ErrorWhileTryingToSave: 'It was not possible to save the desired repository',
  ErrorWhileTryingToFind: 'It was not possible to find the desired object'

} as const;

const serverErrorsCodes = { 
    BadRequest : '400',
    Forbidden : '403',
    NotFound : '404',
    Conflict : '409',
    InternalServerError: '500'
} as const;

const serverErrorsMessages = { 
    ServerErros : serverErrorsNames, 
    ConditionAlreadySatisfied : 'ALREADY SATISFIED', 
    NotFound : 'NOT FOUND'
} as const;

export type ServerErrorsNameType = keyof typeof serverErrorsNames;
export type ServerErrorsCodesType = keyof typeof serverErrorsCodes;
export type ServerErrorsMessagesType = keyof typeof serverErrorsMessages;

export function getErrorMessage(errorName: ServerErrorsNameType): string {
  return serverErrorsNames[errorName] || 'An unknown error occured.'
}