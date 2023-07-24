import { Server } from "../../domain/server/entities/entities";
import { ServerDTO } from "../../domain/server/dtos/interface";
import { ServerErrors } from "../../domain/server/errors/errors";

export class ServerService {
    private servers: Server[] = [];
  
    public addServer(serverDTO: ServerDTO): void | ServerErrors {
      try {
        const server = Server.setServer(serverDTO);
        this.servers.push(server);
        console.log(this.servers)
      } catch (error) {
        if(error instanceof ServerErrors){
            console.error(new ServerErrors("ServerStartupFailed", "ServerErros", "InternalServerError"));
            return new ServerErrors("ServerStartupFailed", "ServerErros", "InternalServerError")
        }
        return error;
      }
    }
  
    public getServer(id: string): Server | ServerErrors | undefined {
      try {
        return this.servers.find((server) => server.getId() === id);
      } catch (error) {
        if(error instanceof ServerErrors){
            console.error(new ServerErrors("ServerStartupFailed", "ServerErros", "InternalServerError"));
            return new ServerErrors("ServerStartupFailed", "ServerErros", "InternalServerError")
        }
        return error;
      }
    }
  
    public getAllServers(): Server[] | ServerErrors {
      try {
        return this.servers;
      } catch (error) {
        if(error instanceof ServerErrors){
            console.error(new ServerErrors("ServerStartupFailed", "ServerErros", "InternalServerError"));
            return new ServerErrors("ServerStartupFailed", "ServerErros", "InternalServerError")
        }
        return error;
      }
    }
  
    public removeServer(id: string): void | ServerErrors {
        try {
            this.servers = this.servers.filter((server) => server.getId() !== id);
        } catch (error) {
            if(error instanceof ServerErrors){
                console.error(new ServerErrors("ServerStartupFailed", "ServerErros", "InternalServerError"));
                return new ServerErrors("ServerStartupFailed", "ServerErros", "InternalServerError")
            }
            return error;
          }
    }
}