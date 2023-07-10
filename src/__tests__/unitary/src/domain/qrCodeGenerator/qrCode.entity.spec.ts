import { QRCodeGeneratorEntity } from "../../../../../qrMonster/domain/qrCodeGenerator/entitites";

// Creating instance with valid parameters:
it('test_constructor_initializes_attributes', () => {
    const qrCodeGeneratorEntity = new QRCodeGeneratorEntity({
        input_text: 'input_text',
        negative_input: 'negative_input',
        image_s3_object: 'image_s3_object'
    });
    expect(qrCodeGeneratorEntity.input_text).toBe('input_text');
    expect(qrCodeGeneratorEntity.negative_input).toBe('negative_input');
    expect(qrCodeGeneratorEntity.image_s3_object).toBe('image_s3_object');
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

// Testing if throws an error when the inpuit text is missing, but with an interface is alarming before the tests
// it('test_is_valid_throws_error_when_input_text_missing', () => {
//     const qrCodeGeneratorEntity = new QRCodeGeneratorEntity({
//         negative_input: 'negative_input',
//         image_s3_object: 'image_s3_object'
//     });
//     expect(() => qrCodeGeneratorEntity.isValid()).toThrow(QRCodeGeneratorErrors);
// });