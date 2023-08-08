/**
 * 
 * @enums qrCodeGeneratorRequest Errors enums
 * @description This file contains predefined enums that help us implement our features at development
 * 
 * 
 */

const qrCodeGeneratorRequestErrorsNames = { 
    // Backend Server Errors
    InternalServerError :'Internal server error',
    NoMapedErrorInResponse : 'No Maped error in response',
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
  
  
  } as const;
  
  const qrCodeGeneratorRequestErrorsCodes = { 
      BadRequest : '400',
      Forbidden : '403',
      NotFound : '404',
      Conflict : '409',
      InternalServerError: '500'
  } as const;
  
  const qrCodeGeneratorRequestErrorsMessages = { 
      ServerErros : qrCodeGeneratorRequestErrorsNames, 
      ConditionAlreadySatisfied : 'ALREADY SATISFIED', 
      NotFound : 'NOT FOUND'
  } as const;
  
  export type qrCodeGeneratorRequestErrorsNameType = keyof typeof qrCodeGeneratorRequestErrorsNames;
  export type qrCodeGeneratorRequestErrorsCodesType = keyof typeof qrCodeGeneratorRequestErrorsCodes;
  export type qrCodeGeneratorRequestErrorsMessagesType = keyof typeof qrCodeGeneratorRequestErrorsMessages;
  
  export function getErrorMessage(errorName: qrCodeGeneratorRequestErrorsNameType): string {
    return qrCodeGeneratorRequestErrorsNames[errorName] || 'An unknown error occured.'
  }