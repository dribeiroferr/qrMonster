import { QrCodeGeneratorRequestModelEntity } from "../entities/entities";
import { QrCodeGeneratorRequestErrors } from "../errors/errors";

/**
 * 
 * @namespace QrCodeGeneratorRequestModelRepository
 * @description this is the QrCodeGeneratorRequest Custom repository that will deal with data storage
 * 
 */

export interface QrCodeGeneratorRequestModelRepository { 
    findall(): Promise<QrCodeGeneratorRequestModelEntity[] | QrCodeGeneratorRequestModelEntity | QrCodeGeneratorRequestErrors>;
    findById(id: string): Promise<QrCodeGeneratorRequestModelEntity[] | QrCodeGeneratorRequestModelEntity | QrCodeGeneratorRequestErrors>;
    save(data: QrCodeGeneratorRequestModelEntity): Promise<QrCodeGeneratorRequestModelEntity[] | void>;
}