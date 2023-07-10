import { QrCodeGeneratorDatabaseEntity } from "../../domain/qrCodeGeneratorDatabase/entities/entitites";
import { QrCodeGeneratorDatabaseErrors } from "../../domain/qrCodeGeneratorDatabase/errors/errors";
import { QrCodeGeneratorDatabaseRepository } from "../../domain/qrCodeGeneratorDatabase/repositories/repositories";
import { QrCodeGeneratorDatabaseServiceDTO } from "./QrCodeGeneratorDatabaseServiceDTO";

export class QrCodeGeneratorDatabaseService{
    constructor(private readonly qrCodeGeneratorDatabaseRepository: QrCodeGeneratorDatabaseRepository){};

    /**
     * createRecord
     */
    public async createRecord(qrCodeData: QrCodeGeneratorDatabaseServiceDTO): Promise<void> {
        try {
            const qrCodeGenerator = new QrCodeGeneratorDatabaseEntity({
                input_text: qrCodeData.inputText,
                negative_input: qrCodeData.negativeInput,
                image_s3_object: qrCodeData.imageS3Object
            });

            await this.qrCodeGeneratorDatabaseRepository.save(qrCodeGenerator);
        } catch (error) {
            if(error instanceof QrCodeGeneratorDatabaseErrors){
                console.error(error);
            }
            return error;
        }
    }
    /**
     * findQrCodeByS3Bucket
     */
    public async findQrCodeByS3Bucket(imageS3Object: string): Promise<QrCodeGeneratorDatabaseEntity | null>{
        try {
            const qrCodeGeneratorByS3Bucket  = await this.qrCodeGeneratorDatabaseRepository.findByS3Bucket(imageS3Object);
            return qrCodeGeneratorByS3Bucket.length > 0 ? qrCodeGeneratorByS3Bucket[0] : null

        } catch (error) {
            if (error instanceof QrCodeGeneratorDatabaseErrors) {
                console.error(error);
            }
            return error;
        }
    }
}