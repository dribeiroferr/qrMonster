export class QrCodeGeneratorDatabaseServiceDTO {
    public inputText : string;
    public negativeInput: string;
    public imageS3Object : string;

    constructor(
        inputText: string, 
        negativeInput: string, 
        imageS3Object: string
    ){
        this.inputText = inputText;
        this.negativeInput = negativeInput;
        this.imageS3Object = imageS3Object;
    }
}