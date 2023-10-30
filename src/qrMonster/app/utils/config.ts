import axios, { Axios, AxiosRequestConfig, AxiosResponse } from "axios";
import { EnvironmentalGlobalEnvironments } from "../../../utils/config/config";
import { QrCodeGeneratorRequestModelEntity } from "../../domain/qrCodeMosterGenerator/entities/entities";
// import { ControlNetResponseInterface } from "../qrCodeMonsterGenerator/controlNetResponseDTO";
import { ControlNetDTO } from "../../domain/controlNetResponseEntity/dtos/interface";
import { QrCodeGeneratorRequestModelDTO } from "../../domain/qrCodeMosterGenerator/dtos/interfaces";

export async function SendControlNetRequest(request: QrCodeGeneratorRequestModelEntity): Promise<any>{
    try {
        const url : string = 'https://stablediffusionapi.com/api/v5/controlnet'
        const headers: object = {'Content-Type': 'application/json',}
        const options: AxiosRequestConfig = { 
            method: 'POST', 
            url, 
            headers, 
            data: JSON.stringify(request)
        }

        const response = await axios(options)
        return response.data;
    } catch (error) {
        console.error(error)
        return error;
    }
}

export async function SendControlNetDTO<T>(request: QrCodeGeneratorRequestModelDTO): Promise<ControlNetDTO> {
    try {
        const url : string = 'https://stablediffusionapi.com/api/v5/controlnet'
        const headers: object = {'Content-Type': 'application/json',}
        const options: AxiosRequestConfig = { 
            method: 'POST', 
            url, 
            headers, 
            data: JSON.stringify(request)
        }
        const response = await axios.request<ControlNetDTO>(options)
        console.log('response.data ', response.data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function FetchingControlNetQueueAPI<T>(
    request: ControlNetDTO,
    key: string,
    ): Promise<ControlNetDTO>{
    try {
        const request_id  = request.id;
        const data: string = JSON.stringify({
            key, 
            request_id
        });

        const url : string = 'https://stablediffusionapi.com/api/v5/controlnet'
        const headers: object = {'Content-Type': 'application/json',}
        const options: AxiosRequestConfig = { 
            method: 'POST', 
            url, 
            headers, 
            data: data
        }

        const response = await axios.request<AxiosResponse<ControlNetDTO>>(options)
        return response.data.data;
    } catch (error) {
        console.error(error)
    }
}