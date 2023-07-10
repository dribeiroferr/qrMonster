import { InMemoryQrCodeGeneratorDatabaseRepository } from "../../../../../infra/database/repositories/inMemory/InMemoryQrGenerator";
import { QrCodeGeneratorDatabaseService } from "../../../../../qrMonster/app/qrCodeGeneratorDatabase/QrCodeGeneratorDatabase";

describe("QrCodeGeneratorDatabaseServiceTest", () => {
    it("test_create_record_success", async () => {
      const inMemoryQrCodeGeneratorDatabaseRepository = new InMemoryQrCodeGeneratorDatabaseRepository();
      const qrCodeGeneratorDatabaseService = new QrCodeGeneratorDatabaseService(inMemoryQrCodeGeneratorDatabaseRepository);
      const qrCodeData = {
        inputText: 'input text',
        negativeInput: 'negative input',
        imageS3Object: 'url::/s3.amazon...'
      };
      const execute = await qrCodeGeneratorDatabaseService.createRecord(qrCodeData);
  
      // Compare the properties of the received object with the qrCodeData object
      expect(execute.input_text).toEqual(qrCodeData.inputText);
      expect(execute.negative_input).toEqual(qrCodeData.negativeInput);
      expect(execute.image_s3_object).toEqual(qrCodeData.imageS3Object);
    });
  });