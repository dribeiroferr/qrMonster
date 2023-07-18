import * as dotenv from "dotenv";
dotenv.config();

export const mongoConfig = { 
    collectionName: process.env.MONGO_AI_QRCODE_GENERATED_IMAGE ?? 'aiQrCodeGeneratedImage',
    databaseHost: process.env.MONGODB_HOSTNAME ?? 'localhost',
    databasePort: process.env.MONGODB_PORT ?? '27017',
    databaseName: process.env.MONGODB_DATABASE_NAME ?? 'test_local_ai_generated_qrCode',
    connectionString: process.env.MONGO_CONNECTION_STRING ?? 'mongodb://localhost/27017/test_local_ai_generated_qrCode'
}