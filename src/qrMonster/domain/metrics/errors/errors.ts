import { ErrorBase } from "../../../../utils/errors/errors";
import { MetricsErrorsNameType, MetricsErrorsCodesType, MetricsErrorsMessagesType } from "../utils/enums";

export class MetricsErrors extends ErrorBase<MetricsErrorsNameType, MetricsErrorsMessagesType,  MetricsErrorsCodesType> {
    constructor(
        errorName: MetricsErrorsNameType, 
        errorMessage: MetricsErrorsMessagesType, 
        errorCode: MetricsErrorsCodesType
    ){
        super({
            name: errorName,
            message: errorMessage, 
            code: errorCode
        })
    }
}