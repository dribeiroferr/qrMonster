import { ResponseDTO } from "../dtos/responseDTO";
import { QrCodeGeneratorRequestModelEntity } from "../../domain/qrCodeMosterGenerator/entities/entities";
import { QrCodeGeneratorRequestErrors } from "../../domain/qrCodeMosterGenerator/errors/errors"; 
// import { ControlNetResponseDTO } from "../../domain/controlNetResponseEntity/dtos/interface";
import { Response } from "express";
import { AxiosResponse, AxiosRequestConfig } from "axios";

type QrCodeGeneratorRequestModelResponseType<T> = {
    [K in keyof Response]?: Response[K];
  } & ResponseDTO<T>;
  

export interface QrCodeGeneratorModelResponseDTO extends QrCodeGeneratorRequestModelResponseType<QrCodeGeneratorRequestErrors | QrCodeGeneratorRequestModelEntity | QrCodeGeneratorRequestModelEntity[]> {}


declare module "express-serve-static-core" { 
    interface Response extends ResponseDTO<QrCodeGeneratorRequestErrors | QrCodeGeneratorRequestModelEntity | QrCodeGeneratorRequestModelEntity[]> {}
}

