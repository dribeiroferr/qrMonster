import { Server } from "../../../../qrMonster/domain/server/entities/entities";
import { ServerRepository } from "../../../../qrMonster/domain/server/repositories/repositories";
import { ServerErrors } from "../../../../qrMonster/domain/server/errors/errors";

/**
 * 
 * @class InMemoryServerRepository
 * @description This class is responsible for creates an repository that saves the entity object in cache
 * @methods save()
 * 
 */

export class InMemoryServerRepository implements ServerRepository {
    findall(): Promise<Server | Server[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Server | Server[]> {
        throw new Error("Method not implemented.");
    } 
    private servers: Server[] = [];

    public async save(server: Server): Promise<Server[] | void >{ 
        try {
            this.servers.push(server)
            return this.servers
        } catch (error) {
            if(error instanceof ServerErrors){
                console.error(new ServerErrors('ErrorWhileTryingToSave', 'ServerErros', 'InternalServerError'));
            }
            return error;
        }
    }
}