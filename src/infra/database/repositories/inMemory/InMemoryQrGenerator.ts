import { QRCodeGeneratorEntity } from "../../../../qrMonster/domain/qrCodeGenerator/entitites";
import { QrCodeGeneratorRepository } from "../../../../qrMonster/domain/repositories";
import { QRCodeGeneratorErrors } from "../../../../qrMonster/domain/qrCodeGenerator/errors";

/**
 * 
 * @namespace
 * @description
 * @class
 * 
 */

export class InMemoryQrCodeGeneratoprRepository implements QrCodeGeneratorRepository {
    save(qrCodeGenerator: QRCodeGeneratorEntity): Promise<void> {
        throw new Error("Method not implemented.");
    } 
    private qrCodeGenerator: QRCodeGeneratorEntity[];

    /**
     * findByS3Bucket
     */
    public async findByS3Bucket(image_s3_object: string): Promise<QRCodeGeneratorEntity[]> {
        try {
            const s3Bucket = this.qrCodeGenerator.filter((qrCodeGenerator) => qrCodeGenerator.image_s3_object === image_s3_object);
            s3Bucket ? s3Bucket : (() => { throw new QRCodeGeneratorErrors("MISSING_ALL_ATTRIBUTES", "QRCODE_MISSING_ATTRIBUTES", "CONFLICT");
             })
        } catch (error) {
            console.error(new QRCodeGeneratorErrors("MISSING_ALL_ATTRIBUTES", "QRCODE_MISSING_ATTRIBUTES", "INTERNAL_SERVER_ERROR"));
        }
    }
}