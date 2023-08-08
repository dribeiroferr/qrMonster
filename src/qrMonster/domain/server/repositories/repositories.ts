import { Server } from "../entities/entities";

/**
 * 
 * @namespace ServerRepository
 * @description this is the Server Custom Metrics Repository that will deal with data storage.
 * 
 */

export interface ServerRepository { 
    findall(): Promise<Server[] | Server | undefined>;
    findById(id: string): Promise<Server[] | Server | undefined>;
    save(server: Server): Promise<Server[] | void>;
}