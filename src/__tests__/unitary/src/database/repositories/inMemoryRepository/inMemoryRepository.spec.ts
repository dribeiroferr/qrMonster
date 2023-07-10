import { InMemoryQrCodeGeneratorDatabaseRepository } from "../../../../../../infra/database/repositories/inMemory/InMemoryQrGenerator";
import { QrCodeGeneratorDatabaseEntity } from "../../../../../../qrMonster/domain/qrCodeGeneratorDatabase/entities/entitites";

describe("InMemoryQrCodeGeneratorDatabaseRepository", () => {
    let repository: InMemoryQrCodeGeneratorDatabaseRepository;
  
    beforeEach(() => {
      repository = new InMemoryQrCodeGeneratorDatabaseRepository();
    });
  
    it("should save a valid QrCodeGeneratorDatabaseEntity", async () => {
      // Create a valid QrCodeGeneratorDatabaseEntity instance
      const qrCodeGenerator = new QrCodeGeneratorDatabaseEntity({
        input_text: "Test Input",
        negative_input: "Test Negative Input",
        image_s3_object: "test-image-url",
      });
  
      // Call the save method
      await repository.save(qrCodeGenerator);
  
      // Assert that the entity has been saved
      expect(repository['qrCodeGenerator']).toContain(qrCodeGenerator);
    });
  
    // it("should throw an error when saving an invalid QrCodeGeneratorDatabaseEntity", async () => {
    //   // Create an invalid QrCodeGeneratorDatabaseEntity instance
    //   const qrCodeGenerator = new QrCodeGeneratorDatabaseEntity({
    //     input_text: null,
    //     negative_input: "Test Negative Input",
    //     image_s3_object: "test-image-url",
    //   });
  
    //   // Call the save method and expect it to throw an error
    //   await expect(repository.save(qrCodeGenerator)).rejects.toThrow();
    // });

    it("should find QrCodeGeneratorDatabaseEntity by S3 bucket", async () => {
        // Create some QrCodeGeneratorDatabaseEntity instances
        const qrCodeGenerator1 = new QrCodeGeneratorDatabaseEntity({
          input_text: "Test Input 1",
          negative_input: "Test Negative Input 1",
          image_s3_object: "s3-bucket-url-1",
        });
    
        const qrCodeGenerator2 = new QrCodeGeneratorDatabaseEntity({
          input_text: "Test Input 2",
          negative_input: "Test Negative Input 2",
          image_s3_object: "s3-bucket-url-2",
        });
    
        // Save the entities in the repository
        await repository.save(qrCodeGenerator1);
        await repository.save(qrCodeGenerator2);
    
        // Call the findByS3Bucket method with a known S3 bucket URL
        const result = await repository.findByS3Bucket("s3-bucket-url-1");
    
        // Assert that the result contains the expected QrCodeGeneratorDatabaseEntity
        expect(result).toContain(qrCodeGenerator1);
        expect(result).not.toContain(qrCodeGenerator2);
      });
    
    //   it("should throw an error when S3 bucket does not exist", async () => {
    //     // Call the findByS3Bucket method with a non-existent S3 bucket URL
    //     await expect(repository.findByS3Bucket("non-existent-bucket-url")).rejects.toThrow();
    //   });

  });