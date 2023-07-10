import { ErrorBase } from "../../../../utils/errors/errors";
import { QrCodeErrorNamesType, QrCodeErrorMessageType, QrCodeErrorsCodesTypes } from "../utils/enums";
export class QRCodeGeneratorDatabaseErrors extends ErrorBase<QrCodeErrorNamesType, QrCodeErrorMessageType, QrCodeErrorsCodesTypes> {
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