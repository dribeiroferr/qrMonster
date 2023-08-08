import { QrCodeGeneratorRequestModelEntity } from "../../../../qrMonster/domain/qrCodeMosterGenerator/entities/entities";
import { QrCodeGeneratorRequestErrors } from "../../../../qrMonster/domain/qrCodeMosterGenerator/errors/errors";
import { QrCodeGeneratorRequestModelRepository } from "../../../../qrMonster/domain/qrCodeMosterGenerator/repositories/repositories";

/**
 * 
 * @class InMemoryQrCodeGeneratorRequestRepository
 * @description This class is responsible for creates an repository that saves the entity object in cache
 * @methods save(), findAll() and findById(id: string)
 * @params id: string
 * 
 */

export class InMemoryQrCodeGeneratorRequestRepository implements QrCodeGeneratorRequestModelRepository {
    private request: QrCodeGeneratorRequestModelEntity[] = [];
    findall(): Promise<QrCodeGeneratorRequestModelEntity | QrCodeGeneratorRequestModelEntity[] | QrCodeGeneratorRequestErrors> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<QrCodeGeneratorRequestModelEntity | QrCodeGeneratorRequestModelEntity[] | QrCodeGeneratorRequestErrors> {
        throw new Error("Method not implemented.");
    } 
    

    public async save(request: QrCodeGeneratorRequestModelEntity): Promise<QrCodeGeneratorRequestModelEntity[] |  void>{
        try {
            this.request.push(request);
            return this.request;
        } catch (error) {
            if(error instanceof QrCodeGeneratorRequestErrors){
                console.error('ErrorWhileTryingToSave', 'RequestErrors', 'InternalServerError');
            }
            return error;
        }
    }


}