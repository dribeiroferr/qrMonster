import { ErrorBase } from "../../../utils/errors/errors";
import { QrCodeErrorNamesType, QrCodeErrorMessageType, QrCodeErrorsCodesTypes } from "./enums";
export class QRCodeGeneratorErrors extends ErrorBase<QrCodeErrorNamesType, QrCodeErrorMessageType, QrCodeErrorsCodesTypes> {
    constructor(
        errorName: QrCodeErrorNamesType, 
        errorMessage: QrCodeErrorMessageType, 
        errorCode: QrCodeErrorsCodesTypes
    ){
        super({
            name: errorName,
            message: errorMessage, 
            code: errorCode
        })
    }
}