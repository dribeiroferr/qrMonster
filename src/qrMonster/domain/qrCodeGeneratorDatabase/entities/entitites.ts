import { QrCodeGeneratorDatabaseErrors } from "../errors/errors";
import { IQrCodeGeneratorDatabaseEntity } from "../dtos/interfaces";

/**
 * 
 * @namespace QrCodeGeneratorEntity
 * @description QR code generator Entity class
 * @class
 * @param input_text the user input text eg: "a duck dancing in the raing"
 * @param negative_input the user negative input text eg : "blurry, foggy, malformed picture etc..."
 * @param image_s3_object the user qrCode image already generated and saved inside a s3 bucket
 * 
 */

export class QrCodeGeneratorDatabaseEntity{

    public input_text: string; 
    public negative_input: string;
    public image_s3_object: string;


    constructor({
        input_text,
        negative_input,
        image_s3_object
    }: IQrCodeGeneratorDatabaseEntity
        ){
        this.input_text = input_text;
        this.negative_input = negative_input;
        this.image_s3_object = image_s3_object;
    }
    
    public isValid(): boolean { 
        try {

            this.input_text ??(() => { throw new QrCodeGeneratorDatabaseErrors("MISSING_INPUT_TEXT_ATTRIBUTE", "QRCODE_MISSING_ATTRIBUTES", "BAD_REQUEST")});
            this.negative_input ?? (() => { throw new QrCodeGeneratorDatabaseErrors("MISSING_NEGATIVE_INPUT_TEXT_ATTRIBUTE", "QRCODE_MISSING_ATTRIBUTES", "BAD_REQUEST")});
            this.image_s3_object ?? (() => { throw new QrCodeGeneratorDatabaseErrors("MISSING_QRCODE_IMAGE_ATTRIBUTE", "QRCODE_MISSING_ATTRIBUTES", "BAD_REQUEST")});

            !this.input_text
            && !this.negative_input
            && !this.image_s3_object ? true : (() => { throw new QrCodeGeneratorDatabaseErrors("MISSING_ALL_ATTRIBUTES", "QRCODE_MISSING_ATTRIBUTES", "BAD_REQUEST");
             });

            return true;
        } catch (error) {
            error instanceof QrCodeGeneratorDatabaseErrors ?? console.error(error);
            return false;
        }
    }

    

}