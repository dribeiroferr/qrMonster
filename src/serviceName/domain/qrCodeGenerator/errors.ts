import { ErrorBase } from "../../../utils/errors/errors";
import { QrCodeErrorNamesType, QrCodeErrorMessageType, QrCodeErrorsCodesTypes } from "./enums";
export class QRCodeGeneratorErrors extends ErrorBase<QrCodeErrorNamesType, QrCodeErrorMessageType, QrCodeErrorsCodesTypes> {}