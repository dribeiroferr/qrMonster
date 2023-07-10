import { QRCodeGeneratorDatabaseEntity } from "../../../../qrMonster/domain/qrCodeGeneratorDatabase/entities/entitites";
import { QrCodeGeneratorRepository } from "../../../../qrMonster/domain/qrCodeGeneratorDatabase/repositories/repositories";
import { QRCodeGeneratorErrors } from "../../../../qrMonster/domain/qrCodeGeneratorDatabase/errors/errors";

/**
 * 
 * @class InMemoryCodeGeneratorRepository
 * @description This class is responsible for creates an repository that saves the entity in memory
 * @methods
 * 
 */

export class InMemoryQrCodeGeneratorRepository implements QrCodeGeneratorRepository {
    private qrCodeGenerator: QRCodeGeneratorDatabaseEntity[] = [];

    public async save(qrCodeGenerator: QRCodeGeneratorDatabaseEntity): Promise<QRCodeGeneratorDatabaseEntity[] | void> {
        try {
            this.qrCodeGenerator.push(qrCodeGenerator);
            return this.qrCodeGenerator
        } catch (error) {
            if(error instanceof QRCodeGeneratorErrors){
                console.error(new QRCodeGeneratorErrors('ALREADY_EXISTS', 'CONDITION_ALREADY_SATISFIED', 'CONFLICT'))
            }
            return error;
        }
    } 

    /**
     * @method findByS3Bucket
     * @param image_s3_object this is the s3 bucket url that cotanins the qrCode original image
     */
    public async findByS3Bucket(image_s3_object: string): Promise<QRCodeGeneratorDatabaseEntity[]> {
        try {
            const s3Bucket: QRCodeGeneratorDatabaseEntity[] = this.qrCodeGenerator.filter((qrCodeGenerator) => qrCodeGenerator.image_s3_object === image_s3_object);
            if(s3Bucket || s3Bucket.length >= 0){
                return s3Bucket;
            }
            return []
        } catch (error) {
            console.error(new QRCodeGeneratorErrors("MISSING_ALL_ATTRIBUTES", "QRCODE_MISSING_ATTRIBUTES", "INTERNAL_SERVER_ERROR"));
            return error;
        }
    }
}