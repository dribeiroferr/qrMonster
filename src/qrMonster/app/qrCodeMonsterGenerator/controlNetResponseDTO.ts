import { QrCodeGeneratorRequestModelEntity } from "../../domain/qrCodeMosterGenerator/entities/entities";
import { QrCodeGeneratorRequestErrors } from "../../domain/qrCodeMosterGenerator/errors/errors";
import { QrCodeGeneratorRequestModelDTO } from "../../domain/qrCodeMosterGenerator/dtos/interfaces";
import { ControlNetDTO } from "../../domain/controlNetResponseEntity/dtos/interface";
import { Response } from "express";
import { AxiosResponse } from "axios";

// export type ControlNetResponseDTO = 
// | QrCodeGeneratorRequestModelEntity
// | QrCodeGeneratorRequestErrors
// | QrCodeGeneratorRequestModelDTO
// | ControlNetDTO

// export interface ControlNetResponseInterface<T> {
//     success: boolean;
//     data?: T;
//     error?: string | QrCodeGeneratorRequestErrors
// }

// type ControlNetResponseType<T> = { 
//     [k in keyof Response]?: Response[k];
//     [l in keyof AxiosResponse]?: AxiosResponse[l];
//     [m in keyof ControlNetDTO]?: ControlNetDTO[m];
// }

// export interface ControlNetResponseDTO {

// }