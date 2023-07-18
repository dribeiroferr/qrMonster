import { MongoDBAdmin } from "../../../../../../infra/database/handlers/mongo/MongoDBAdmin";
import { mongoConfig } from "../../../../../../infra/database/handlers/mongo/config";

it('test_get_instance_returns_singleton_instance', () => {
    const instance1 = MongoDBAdmin.getInstance();
    const instance2 = MongoDBAdmin.getInstance();
    expect(instance1).toBe(instance2);
});

// it('test_connect_sets_mongo_client_and_db', async () => {
//     const mongoDBAdmin = MongoDBAdmin.getInstance();
//     await mongoDBAdmin.connect(mongoConfig.connectionString);
//     expect(mongoDBAdmin['mongoClient']).not.toBeNull();
//     expect(mongoDBAdmin['db']).not.toBeNull();
// });

// it('test_get_db_returns_db_instance', async () => {
//     const mongoDBAdmin = MongoDBAdmin.getInstance();
//     await mongoDBAdmin.connect(mongoConfig.connectionString);
//     const db = mongoDBAdmin.getDb();
//     expect(db).not.toBeNull();
// });

it('test_get_db_throws_error_when_db_not_set', () => {
    const mongoDBAdmin = MongoDBAdmin.getInstance();
    expect(() => mongoDBAdmin.getDb()).toThrow('Database connection has not been established');
});

// it('test_close_sets_mongo_client_and_db_to_null', async () => {
//     const mongoDBAdmin = MongoDBAdmin.getInstance();
//     await mongoDBAdmin.connect(mongoConfig.connectionString);
//     await mongoDBAdmin.close();
//     expect(mongoDBAdmin['mongoClient']).toBeNull();
//     expect(mongoDBAdmin['db']).toBeNull();
// });