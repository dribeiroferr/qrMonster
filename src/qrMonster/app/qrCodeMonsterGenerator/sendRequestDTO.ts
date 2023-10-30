import { ControlNetDTO } from "../../domain/controlNetResponseEntity/dtos/interface";
import { QrCodeGeneratorRequestModelDTO } from "../../domain/qrCodeMosterGenerator/dtos/interfaces";
import { QrCodeGeneratorRequestModelEntity } from "../../domain/qrCodeMosterGenerator/entities/entities";
import { QrCodeGeneratorRequestErrors } from "../../domain/qrCodeMosterGenerator/errors/errors";
import { AxiosResponse } from "axios";

export interface SendRequest { 
    sendRequest(request: QrCodeGeneratorRequestModelEntity): Promise<ControlNetDTO>
}