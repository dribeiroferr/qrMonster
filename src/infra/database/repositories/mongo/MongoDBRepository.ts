import { QrCodeGeneratorDatabaseEntity } from "../../../../qrMonster/domain/qrCodeGeneratorDatabase/entities/entitites";
import { QrCodeGeneratorDatabaseRepository } from "../../../../qrMonster/domain/qrCodeGeneratorDatabase/repositories/repositories";
import { QrCodeGeneratorDatabaseErrors } from "../../../../qrMonster/domain/qrCodeGeneratorDatabase/errors/errors";
import { Collection, Db } from "mongodb";
import { MongoDBAdmin } from "../../handlers/mongo/MongoDBAdmin";
import { mongoConfig } from "../../handlers/mongo/config";

export class MongoDBRepository implements QrCodeGeneratorDatabaseRepository {
  private collection: Collection<QrCodeGeneratorDatabaseEntity>;

  constructor(private db: Db) {
    this.collection = this.db.collection<QrCodeGeneratorDatabaseEntity>(
      mongoConfig.collectionName
    );
  }

  private getCollection(): Collection<QrCodeGeneratorDatabaseEntity> {
    if (!this.collection) {
      throw new Error("Collection is not initialized");
    }
    return this.collection;
  }

  async save(
    qrCodeGenerator: QrCodeGeneratorDatabaseEntity
  ): Promise<void | QrCodeGeneratorDatabaseEntity[]> {
    try {
      await this.getCollection().insertOne(qrCodeGenerator);
    } catch (error) {
      if (error.name instanceof QrCodeGeneratorDatabaseErrors) {
        console.error(
          new QrCodeGeneratorDatabaseErrors(
            "ALREADY_EXISTS",
            "CONDITION_ALREADY_SATISFIED",
            "CONFLICT"
          )
        );
      } else {
        throw error;
      }
    }
  }

  async findByS3Bucket(image_s3_object: string): Promise<QrCodeGeneratorDatabaseEntity> {
    try {
      return await this.getCollection().findOne({ image_s3_object });
    } catch (error) {
      if (error.name instanceof QrCodeGeneratorDatabaseErrors) {
        console.error(
          new QrCodeGeneratorDatabaseErrors("NOT_FOUND", "NOT_FOUND", "NOT_FOUND")
        );
      } else {
        throw error;
      }
    }
  }

  async close(): Promise<void> {
    try {
      await MongoDBAdmin.getInstance().close();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}