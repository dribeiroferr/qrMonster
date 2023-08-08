import { QrCodeGeneratorRequestModelDTO } from "../../domain/qrCodeMosterGenerator/dtos/interfaces";
import { QrCodeGeneratorRequestModelEntity } from "../../domain/qrCodeMosterGenerator/entities/entities";
import { QrCodeGeneratorRequestErrors } from "../../domain/qrCodeMosterGenerator/errors/errors";

export interface SendRequest { 
    sendRequest(request: QrCodeGeneratorRequestModelEntity): Promise<QrCodeGeneratorRequestModelDTO | QrCodeGeneratorRequestErrors>
}