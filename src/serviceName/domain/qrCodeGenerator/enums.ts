/**
 * 
 * @namespace enums
 * @description This file contains predefined enums that help us implement our features at development
 * 
 * 
 */

const qrCodeGeneratorErrorsNames = { 
    MISSING_INPUT_TEXT_ATTRIBUTE : 'MISSING INPUT TEXT ATTRIBUTE', 
    MISSING_NEGATIVE_INPUT_TEXT_ATTRIBUTE: 'MISSING NEGATIVE TEXT INPUT ATTRIBUTE',
    MISSING_QRCODE_IMAGE_ATTRIBUTE : 'MISSING QRCODE IMAGE ATTRIBUTE'
} as const;

const qrCodeErrorsCodes = { 
    BAD_REQUEST : '400',
    CONFLICT : '409',
    INTERNAL_SERVER_ERROR: '500'
} as const;

const qrCodeErrorsMessage = { 
    QRCODE_MISSING_ATTRIBUTES : qrCodeGeneratorErrorsNames
} as const;

export type QrCodeErrorNamesType = keyof typeof qrCodeGeneratorErrorsNames;
export type QrCodeErrorsCodesTypes = keyof typeof qrCodeErrorsCodes;
export type QrCodeErrorMessageType = keyof typeof qrCodeErrorsMessage;