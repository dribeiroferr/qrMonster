import { QrCodeGeneratorDatabaseEntity } from "../entities/entitites";

/**
 * 
 * @namespace QrCodeGeneratorDatabaseRepository
 * @description this is the QrCodeRepository that will help us deal with data storage.
 * 
 */

export interface QrCodeGeneratorDatabaseRepository { 
    findByS3Bucket(image_s3_object: string): Promise<QrCodeGeneratorDatabaseEntity[] | QrCodeGeneratorDatabaseEntity>;
    save(qrCodeGenerator: QrCodeGeneratorDatabaseEntity): Promise<QrCodeGeneratorDatabaseEntity[] | void>
}