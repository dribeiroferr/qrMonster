import { QRCodeGeneratorEntity } from "../serviceName/domain/qrCodeGenerator/entitites";

// Creating instance with valid parameters:

  it('test_is_valid_returns_true', () => {
        const qrCodeGeneratorEntity = new QRCodeGeneratorEntity({
            input_text: 'input_text',
            negative_input: 'negative_input',
            image_s3_object: 'image_s3_object'
        });
        expect(qrCodeGeneratorEntity.isValid()).toBe(true);
    });

// Testing isValid() returns true when all required attributes are present
it('test_is_valid_returns_true', () => {
    const qrCodeGeneratorEntity = new QRCodeGeneratorEntity({
        input_text: 'input_text',
        negative_input: 'negative_input',
        image_s3_object: 'image_s3_object'
    });
    expect(qrCodeGeneratorEntity.isValid()).toBe(true);
});