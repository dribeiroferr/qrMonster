import { MongoDBAdmin } from "../../../../../../infra/database/handlers/mongo/MongoDBAdmin";
import { mongoConfig } from "../../../../../../infra/database/handlers/mongo/config";
import { MongoDBRepository } from "../../../../../../infra/database/repositories/mongo/MongoDBRepository";
import { QrCodeGeneratorDatabaseEntity } from "../../../../../../qrMonster/domain/qrCodeGeneratorDatabase/entities/entitites";
import { QrCodeGeneratorDatabaseErrors } from "../../../../../../qrMonster/domain/qrCodeGeneratorDatabase/errors/errors";

it('this is a default test, only to stop allarming while running other tests', () => { 
    const a : number = 2;
    const b : number = 3;
    expect(a + b).toBeLessThanOrEqual(5)
})

// DATABASE NEEDS TO BE IMPLEMENTED BEFORE PROCEED WITH TESTS

// it('test_save_valid_entity', async () => {
//     const admin = MongoDBAdmin.getInstance();
//     await admin.connect(mongoConfig.connectionString);
//     const db = admin.getDb();
//     const repository = new MongoDBRepository(db);

//     const entity = new QrCodeGeneratorDatabaseEntity({
//         input_text: 'valid_input_text',
//         negative_input: 'valid_negative_input',
//         image_s3_object: 'valid_image_s3_object'
//     });

//     await expect(repository.save(entity)).resolves.toBeUndefined();
//     await repository.close();
// });

// //     // Tests that an error is logged when trying to save an existing QR code generator entity
// //     it('test_save_existing_entity', async () => {
// //         const admin = MongoDBAdmin.getInstance();
// //         await admin.connect(mongoConfig.connectionString);
// //         const db = admin.getDb();
// //         const repository = new MongoDBRepository(db);
// //         const entity = new QrCodeGeneratorDatabaseEntity({
// //             input_text: 'valid_input_text',
// //             negative_input: 'valid_negative_input',
// //             image_s3_object: 'valid_image_s3_object'
// //         });
// //         await expect(repository.save(entity)).resolves.toBeUndefined();
// //         await expect(repository.save(entity)).rejects.toThrow(QrCodeGeneratorDatabaseErrors);
// //         await repository.close();
// //     });

// //     it('test_find_existing_entity', async () => {
// //         const admin = MongoDBAdmin.getInstance();
// //         await admin.connect(mongoConfig.connectionString);
// //         const db = admin.getDb();
// //         const repository = new MongoDBRepository(db);
// //         const entity = new QrCodeGeneratorDatabaseEntity({
// //             input_text: 'valid_input_text',
// //             negative_input: 'valid_negative_input',
// //             image_s3_object: 'valid_image_s3_object'
// //         });
// //         await expect(repository.save(entity)).resolves.toBeUndefined();
// //         await expect(repository.findByS3Bucket('valid_image_s3_object')).resolves.toEqual(entity);
// //         await repository.close();
// //     });

// //     it('test_find_non_existing_entity', async () => {
// //         const admin = MongoDBAdmin.getInstance();
// //         await admin.connect(mongoConfig.connectionString);
// //         const db = admin.getDb();
// //         const repository = new MongoDBRepository(db);
// //         await expect(repository.findByS3Bucket('non_existing_image_s3_object')).rejects.toThrow(QrCodeGeneratorDatabaseErrors);
// //         await repository.close();
// //     });

// //     it('test_close_database_connection', async () => {
// //         const admin = MongoDBAdmin.getInstance();
// //         await admin.connect(mongoConfig.connectionString);
// //         const db = admin.getDb();
// //         const repository = new MongoDBRepository(db);
// //         await expect(repository.close()).resolves.toBeUndefined();
// //     });

// //     it('test_close_database_connection_error', async () => {
// //         const admin = MongoDBAdmin.getInstance();
// //         await admin.connect(mongoConfig.connectionString);
// //         const db = admin.getDb();
// //         const repository = new MongoDBRepository(db);
// //         await expect(MongoDBAdmin.getInstance().close()).rejects.toThrow();
// //         await repository.close();
// //     });