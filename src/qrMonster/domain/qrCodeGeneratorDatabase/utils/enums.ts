/**
 * 
 * @enums Custom Errors enums
 * @description This file contains predefined enums that help us implement our features at development
 * 
 * 
 */

const qrCodeGeneratorErrorsNames = { 
    MISSING_ALL_ATTRIBUTES : 'MISSING ALL ATTRIBUTES',
    MISSING_INPUT_TEXT_ATTRIBUTE : 'MISSING INPUT TEXT ATTRIBUTE', 
    MISSING_NEGATIVE_INPUT_TEXT_ATTRIBUTE: 'MISSING NEGATIVE TEXT INPUT ATTRIBUTE',
    MISSING_QRCODE_IMAGE_ATTRIBUTE : 'MISSING QRCODE IMAGE ATTRIBUTE',
    ALREADY_EXISTS : 'ALREADY EXISTS',
    NOT_FOUND : 'NOT FOUND'
} as const;

const qrCodeErrorsCodes = { 
    BAD_REQUEST : '400',
    FORBIDDEN : '403',
    NOT_FOUND : '404',
    CONFLICT : '409',
    INTERNAL_SERVER_ERROR: '500'
} as const;

const qrCodeErrorsMessage = { 
    QRCODE_MISSING_ATTRIBUTES : qrCodeGeneratorErrorsNames, 
    CONDITION_ALREADY_SATISFIED : 'ALREADY SATISFIED', 
    NOT_FOUND : 'NOT FOUND'
} as const;

export type QrCodeErrorNamesType = keyof typeof qrCodeGeneratorErrorsNames;
export type QrCodeErrorMessageType = keyof typeof qrCodeErrorsMessage;
export type QrCodeErrorsCodesTypes = keyof typeof qrCodeErrorsCodes;