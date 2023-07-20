import * as dotenv from "dotenv";
dotenv.config();

export const mongoConfig = { 
    collectionName: process.env.MONGODB_COLLECTION ?? 'aiQrCodeGeneratedImage',
    databaseHost: process.env.MONGODB_HOSTNAME ?? 'localhost',
    databasePort: process.env.MONGODB_PORT ?? '27017',
    databaseName: process.env.MONGODB_DATABASE ?? 'test_local_ai_generated_qrCode',
    connectionString: process.env.MONGO_CONNECTION_STRING ?? 'mongodb://localhost/27017/test_local_ai_generated_qrCode'
}   