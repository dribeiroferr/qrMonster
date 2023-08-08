import { ErrorBase } from "../../../../utils/errors/errors";
import { qrCodeGeneratorRequestErrorsCodesType, qrCodeGeneratorRequestErrorsMessagesType, qrCodeGeneratorRequestErrorsNameType } from "../utils/enums";
export class QrCodeGeneratorRequestErrors extends ErrorBase<qrCodeGeneratorRequestErrorsNameType, qrCodeGeneratorRequestErrorsMessagesType, qrCodeGeneratorRequestErrorsCodesType> {
    constructor(
        errorName: qrCodeGeneratorRequestErrorsNameType, 
        errorMessage: qrCodeGeneratorRequestErrorsMessagesType, 
        errorCode: qrCodeGeneratorRequestErrorsCodesType
    ){
        super({
            name: errorName,
            message: errorMessage, 
            code: errorCode
        })
    }
}