import express from "express";
import { ServerService } from "../../app/server/serverService";
import { Middleware } from "../../app/middleware/middleware";
import { Server } from "../../domain/server/entities/entities";
import { ServerErrors } from "../../domain/server/errors/errors";
import { EnvironmentalGlobalEnvironments } from "../../../utils/config/config";
import { ServerDTO } from "../../domain/server/dtos/interface";
import os from "os";
import cluster from "cluster";
import { router } from "../router/v1/router";

export class ExpressAdapter { 
    private app: express.Application;
    private readonly port: number;
    private serverService: ServerService;
    private router: express.Router;

    constructor(port: number){
        this.app = express();
        this.port = port;
        this.router = router;
        this.serverService = new ServerService();
        this.setupMiddleware();
        this.setupRouterV1();
    }

    private setupMiddleware(): void | ServerErrors {
        try {
            this.app.use(Middleware.logRequests);
        } catch (error) {
            if(error instanceof ServerErrors){ 
                console.error(new ServerErrors("MiddlewareSetupHasFailed", "ServerErros", "InternalServerError"));
                return new ServerErrors("MiddlewareSetupHasFailed", "ServerErros", "InternalServerError");
            }
            return error;
        }
    }

    private setupRouterV1(): void | ServerErrors {
        try {
            this.app.use("/v1", this.router);
        } catch (error) {
            if(error instanceof ServerErrors){ 
                console.error(new ServerErrors("RouterV1SetupHasFailed", "ServerErros", "InternalServerError"));
                return new ServerErrors("RouterV1SetupHasFailed", "ServerErros", "InternalServerError");
            }
            return error;
        }
    }

    public startServer(): void | ServerErrors { 
        try {
            this.app.listen(this.port, () => { 
                console.log(`Server is running on port ${this.port}`);
            });
        } catch (error) {
            if(error instanceof ServerErrors){ 
                console.error(new ServerErrors("ServerStartupFailed", "ServerErros", "InternalServerError"));
                return new ServerErrors("ServerStartupFailed", "ServerErros", "InternalServerError");
            }
            return error;
        }
    }
    public addServer(serverDTO: ServerDTO): void {
        try {
            console.log('adding server')
            const server = Server.setServer(serverDTO)
            this.serverService.addServer(server.toDTO());
        } catch (error) {
            console.error(error);
        };
      }
    
    public getServer(id: string): Server | ServerErrors | undefined {
        return this.serverService.getServer(id);
    }

    public getAllServers(): Server[] | ServerErrors {
        return this.serverService.getAllServers();
    }

    private createWorkers():void {
        const numCPUs = os.cpus().length;
        console.log('[ ] - creating workers');
        console.log('[ ] - number of CPUs availables: ', numCPUs);
        for(let i = 0; i < numCPUs; i++){
            console.log(`[ ] - forking ${i} CPUs`);
            cluster.fork();
        }
    }

    public startWithCluster(): void{
        if(cluster.isPrimary){
            this.createWorkers();
            cluster.on("exit", (worker, code, signal) => {
                console.log(`Worker ${worker.process.pid} died`);
                cluster.fork();
            })
        } else { 
            this.startServer();
        }
    }

    public removeServer(id: string): void {
        this.serverService.removeServer(id);
    }
}