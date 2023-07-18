import { MongoClient, Db } from "mongodb";
import { mongoConfig } from "./config";

export class MongoDBAdmin { 
    private static instance: MongoDBAdmin;
    private mongoClient: MongoClient | null = null;
    private db: Db | null = null;

    private constructor() {};

    static getInstance(): MongoDBAdmin {
        try {
            if(!MongoDBAdmin.instance){
                MongoDBAdmin.instance = new MongoDBAdmin();
            }
            return MongoDBAdmin.instance;
        } catch (error) {
            return error;
        }
    }

    async connect(connectionString: string): Promise<void> { 
        try {
            if(!this.mongoClient){
                this.mongoClient = new MongoClient(connectionString);
                await this.mongoClient.connect();
                this.db = this.mongoClient.db(mongoConfig.databaseName);
            }
        } catch (error) {
            return error;
        }
    }

    getDb(): Db {
        if(!this.db){
            throw new Error('Database connection has not been established')
        }
        return this.db;
    }

    async close(): Promise<void>{
        if(!this.mongoClient){
            await this.mongoClient.close();
            this.mongoClient = null;
            this.db = null;
        }
    }
}