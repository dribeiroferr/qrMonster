import { QrCodeGeneratorRequestModelDTO } from "../../domain/qrCodeMosterGenerator/dtos/interfaces";
import { QrCodeGeneratorRequestModelEntity } from "../../domain/qrCodeMosterGenerator/entities/entities";
import { QrCodeGeneratorRequestErrors } from "../../domain/qrCodeMosterGenerator/errors/errors";
import { AxiosInstance } from "../utils/config";
import { SendRequest } from "./sendRequestDTO";
import axios from 'axios'

export class QrCodeGeneratorService implements SendRequest { 
    public async sendRequest(request: QrCodeGeneratorRequestModelEntity): Promise<QrCodeGeneratorRequestModelDTO> {
        try {
            const response: QrCodeGeneratorRequestModelDTO = await AxiosInstance.post('controlnet', request);
            return response
        } catch (error) {
            if(error instanceof QrCodeGeneratorRequestErrors){
                console.error(new QrCodeGeneratorRequestErrors('BackendNotResponding', 'RequestErrors', 'BadRequest'));
            }
            return error;
        }
    }
}