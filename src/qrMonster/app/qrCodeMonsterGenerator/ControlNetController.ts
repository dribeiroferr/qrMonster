import { QrCodeGeneratorRequestErrors } from "../../domain/qrCodeMosterGenerator/errors/errors";
import { QrCodeGeneratorModelResponseDTO } from "./QrCodeGeneratorRequestResponseDTO";
import { Request, Response, NextFunction } from "express";
import { QrCodeGeneratorService } from "./QrCodeMonsterGenerator";
import { QrCodeGeneratorRequestModelDTO } from "../../domain/qrCodeMosterGenerator/dtos/interfaces";
import { QrCodeGeneratorRequestModelEntity } from "../../domain/qrCodeMosterGenerator/entities/entities";
// import { ControlNetResponseDTO } from "./controlNetResponseDTO";
import { ControlNetDTO } from "../../domain/controlNetResponseEntity/dtos/interface";
import { AxiosResponse } from "axios";

export class ControlNetController{    
    public async execute (req: Request, res: Response): Promise<Response<AxiosResponse<ControlNetDTO>>>{
        try {
            const requestData: QrCodeGeneratorRequestModelDTO = req.body;
            const response = await new QrCodeGeneratorService().sendRequest(requestData)
            
            return res.json(response);
        } catch (error) {
            return res.json(error);
        }
    }
}