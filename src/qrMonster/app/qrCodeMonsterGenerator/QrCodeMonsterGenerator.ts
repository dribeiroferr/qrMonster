import { ControlNetDTO } from "../../domain/controlNetResponseEntity/dtos/interface";
import { QrCodeGeneratorRequestModelDTO } from "../../domain/qrCodeMosterGenerator/dtos/interfaces";
import { QrCodeGeneratorRequestModelEntity } from "../../domain/qrCodeMosterGenerator/entities/entities";
import { QrCodeGeneratorRequestErrors } from "../../domain/qrCodeMosterGenerator/errors/errors";
import { FetchingControlNetQueueAPI, SendControlNetDTO, SendControlNetRequest } from "../utils/config";
// import { ControlNetResponseDTO, ControlNetResponseInterface } from "./controlNetResponseDTO";
import { SendRequest } from "./sendRequestDTO";
import axios, { AxiosResponse } from 'axios'

export class QrCodeGeneratorService implements SendRequest { 
    public async sendRequest(request: QrCodeGeneratorRequestModelDTO): Promise<ControlNetDTO> {
        try {
            const response: ControlNetDTO = await SendControlNetDTO(request);
            console.log('Response => ', response);
            
            if(response.status === 'success'){
                console.log("response data: => ", response)
            } else if(response.status === 'processing'){
                console.log("response is at queued due => ", response.status)
                console.log("it needs to use their fetch API to consult the output (request_ID) => ", response.id)
                
                let fetch_response: ControlNetDTO = await FetchingControlNetQueueAPI(response, request.key);
                return fetch_response
            }else {
                console.log("it not worked due: => ", response)
                console.log("an error had occurred, WIP to implement an enfficient way to work this out")
            }

            return response;
            
        } catch (error) {
            if(error instanceof QrCodeGeneratorRequestErrors){
                console.error(new QrCodeGeneratorRequestErrors('BackendNotResponding', 'RequestErrors', 'BadRequest'));
            }
            return error;
        }
    }
}