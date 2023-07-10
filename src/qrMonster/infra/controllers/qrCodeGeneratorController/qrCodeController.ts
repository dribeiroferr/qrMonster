import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { plainToClass } from "class-transformer"
import { validate } from "class-validator"
import { CreateQrCodeGeneratorDatabaseService } from "../../../app/qrCodeGeneratorDatabase/CreateQrCodeGeneratorDatabaseService"; 
import { QrCodeGeneratorDatabaseServiceDTO } from "../../../app/qrCodeGeneratorDatabase/QrCodeGeneratorDatabaseServiceDTO";

export class CreateQrCodeController { 
    constructor(private readonly qrCodeGeneratorDatabaseService: CreateQrCodeGeneratorDatabaseService){}

    async handler(req: Request, res: Response, next: NextFunction): Promise<Response | void>{
        try {
            const qrCodeData: QrCodeGeneratorDatabaseServiceDTO = plainToClass(
                QrCodeGeneratorDatabaseServiceDTO,
                req.body
              );
              await validate(qrCodeData);

              const validationErrors = validationResult(req);
              if(!validationErrors.isEmpty()){
                res.status(400).json({ errors: validationErrors.array() })
              }
              return;
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" })
        }
    }
}