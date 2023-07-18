import { QrCodeGeneratorDatabaseEntity } from "../../../../qrMonster/domain/qrCodeGeneratorDatabase/entities/entitites";
import { QrCodeGeneratorDatabaseRepository } from "../../../../qrMonster/domain/qrCodeGeneratorDatabase/repositories/repositories";
import { QrCodeGeneratorDatabaseErrors } from "../../../../qrMonster/domain/qrCodeGeneratorDatabase/errors/errors";

/**
 * 
 * @class InMemoryCodeGeneratorRepository
 * @description This class is responsible for creates an repository that saves the entity in memory
 * @methods save(), findByS3Bucket
 * 
 */

export class InMemoryQrCodeGeneratorDatabaseRepository implements QrCodeGeneratorDatabaseRepository {
    private qrCodeGenerator: QrCodeGeneratorDatabaseEntity[] = [];

    public async save(qrCodeGenerator: QrCodeGeneratorDatabaseEntity): Promise<QrCodeGeneratorDatabaseEntity[] | void> {
        try {
            this.qrCodeGenerator.push(qrCodeGenerator);
            return this.qrCodeGenerator;
        } catch (error) {
            if(error instanceof QrCodeGeneratorDatabaseErrors){
                console.error(new QrCodeGeneratorDatabaseErrors('ALREADY_EXISTS', 'CONDITION_ALREADY_SATISFIED', 'CONFLICT'))
            }
            return error;
        }
    } 

    /**
     * @method findByS3Bucket
     * @param image_s3_object this is the s3 bucket url that cotanins the qrCode original image
     */
    public async findByS3Bucket(image_s3_object: string): Promise<QrCodeGeneratorDatabaseEntity[]> {
        try {
            const s3Bucket: QrCodeGeneratorDatabaseEntity[] = this.qrCodeGenerator.filter((qrCodeGenerator) => qrCodeGenerator.image_s3_object === image_s3_object);
            if(s3Bucket || s3Bucket.length >= 0){
                return s3Bucket;
            }
            return []
        } catch (error) {
            console.error(new QrCodeGeneratorDatabaseErrors("MISSING_ALL_ATTRIBUTES", "QRCODE_MISSING_ATTRIBUTES", "INTERNAL_SERVER_ERROR"));
            return error;
        }
    }
}