import { QrCodeGeneratorRequestErrors } from "../../domain/qrCodeMosterGenerator/errors/errors";
import { QrCodeGeneratorModelResponseDTO } from "./QrCodeGeneratorRequestResponseDTO";
import { Request, Response, NextFunction } from "express";
import { QrCodeGeneratorService } from "./QrCodeMonsterGenerator";

export class ControlNetController{ 
    public async execute(req: Request, res: Response, next: NextFunction): Promise<QrCodeGeneratorModelResponseDTO | any>{
        try {
            const result = await new QrCodeGeneratorService().sendRequest(req.body);
            return res.json(result); 
        } catch (error) {
            if(error instanceof QrCodeGeneratorRequestErrors){
                console.error(new QrCodeGeneratorRequestErrors('InternalServerError', 'RequestErrors', 'BadRequest'))
                return res.json(error);
            }
            return res.json(error);
        }
    }
}