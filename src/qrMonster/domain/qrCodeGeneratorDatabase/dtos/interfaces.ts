export interface IQrCodeGeneratorDatabaseEntity {
    id?: string;
    input_text: string;
    negative_input: string;
    image_s3_object: string;
}