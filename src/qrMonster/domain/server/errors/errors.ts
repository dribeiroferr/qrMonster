import { ErrorBase } from "../../../../utils/errors/errors";
import { ServerErrorsNameType, ServerErrorsCodesType, ServerErrorsMessagesType } from "../utils/enums";

export class ServerErrors extends ErrorBase<ServerErrorsNameType, ServerErrorsMessagesType, ServerErrorsCodesType> {
    constructor(
        errorName: ServerErrorsNameType, 
        errorMessage: ServerErrorsMessagesType, 
        errorCode: ServerErrorsCodesType
    ){
        super({
            name: errorName,
            message: errorMessage, 
            code: errorCode
        })
    }
}