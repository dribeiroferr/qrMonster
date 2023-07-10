import { InMemoryQrCodeGeneratorRepository } from "../../../../../../infra/database/repositories/inMemory/InMemoryQrGenerator";
import { QRCodeGeneratorEntity } from "../../../../../../qrMonster/domain/qrCodeGeneratorDatabase/entities/entitites";

describe("InMemoryQrCodeGeneratorRepository", () => {
    let repository: InMemoryQrCodeGeneratorRepository;
  
    beforeEach(() => {
      repository = new InMemoryQrCodeGeneratorRepository();
    });
  
    it("should save a valid QRCodeGeneratorEntity", async () => {
      // Create a valid QRCodeGeneratorEntity instance
      const qrCodeGenerator = new QRCodeGeneratorEntity({
        input_text: "Test Input",
        negative_input: "Test Negative Input",
        image_s3_object: "test-image-url",
      });
  
      // Call the save method
      await repository.save(qrCodeGenerator);
  
      // Assert that the entity has been saved
      expect(repository['qrCodeGenerator']).toContain(qrCodeGenerator);
    });
  
    // it("should throw an error when saving an invalid QRCodeGeneratorEntity", async () => {
    //   // Create an invalid QRCodeGeneratorEntity instance
    //   const qrCodeGenerator = new QRCodeGeneratorEntity({
    //     input_text: null,
    //     negative_input: "Test Negative Input",
    //     image_s3_object: "test-image-url",
    //   });
  
    //   // Call the save method and expect it to throw an error
    //   await expect(repository.save(qrCodeGenerator)).rejects.toThrow();
    // });

    it("should find QRCodeGeneratorEntity by S3 bucket", async () => {
        // Create some QRCodeGeneratorEntity instances
        const qrCodeGenerator1 = new QRCodeGeneratorEntity({
          input_text: "Test Input 1",
          negative_input: "Test Negative Input 1",
          image_s3_object: "s3-bucket-url-1",
        });
    
        const qrCodeGenerator2 = new QRCodeGeneratorEntity({
          input_text: "Test Input 2",
          negative_input: "Test Negative Input 2",
          image_s3_object: "s3-bucket-url-2",
        });
    
        // Save the entities in the repository
        await repository.save(qrCodeGenerator1);
        await repository.save(qrCodeGenerator2);
    
        // Call the findByS3Bucket method with a known S3 bucket URL
        const result = await repository.findByS3Bucket("s3-bucket-url-1");
    
        // Assert that the result contains the expected QRCodeGeneratorEntity
        expect(result).toContain(qrCodeGenerator1);
        expect(result).not.toContain(qrCodeGenerator2);
      });
    
    //   it("should throw an error when S3 bucket does not exist", async () => {
    //     // Call the findByS3Bucket method with a non-existent S3 bucket URL
    //     await expect(repository.findByS3Bucket("non-existent-bucket-url")).rejects.toThrow();
    //   });

  });