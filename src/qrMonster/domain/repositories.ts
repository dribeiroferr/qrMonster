import { QRCodeGeneratorEntity } from "./qrCodeGenerator/entitites";

/**
 * 
 * @namespace QrCodeGeneratorRepository
 * @description this is the QrCodeRepository that will help us deal with data storage.
 * 
 */

export interface QrCodeGeneratorRepository { 
    findByS3Bucket(image_s3_object: string): Promise<QRCodeGeneratorEntity[] | undefined>;
    save(qrCodeGenerator: QRCodeGeneratorEntity): Promise<QRCodeGeneratorEntity[] | void>
}