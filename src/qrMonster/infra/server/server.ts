import express from "express";
import cluster, { Worker } from "cluster";
import os from "os"
import { EnvironmentalGlobalEnvironments } from "../../../utils/config/config";
import { router } from "../router/v1/router";

export class Server {
    private startServer() { 
        try {
            const app = express();
            app.use('/v1', router);
            app.use(express.json());
            app.use(express.urlencoded({ extended: true }));
            app.listen(EnvironmentalGlobalEnvironments.port, () => {
                console.log(`Server is running on ${EnvironmentalGlobalEnvironments.port}.`); 
            })
        } catch (error) {
            console.error(error)
            return error;
        }
    }

    public startWithCluster(){
        try {
            const numCPUs = os.cpus().length;
            console.log(numCPUs, 'cpus available in this machine...');

            if(cluster.isPrimary){
                for(let i: number; i < numCPUs; i++){
                    cluster.fork();
                }
    
                cluster.on('exit', (worker: any, code: any, signal: any) => { 
                    console.log(`Worker ${process.pid} died`);
                });
            } else { 
                this.startServer();
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    public startWithoutCluster(){
        try {
            this.startServer();
        } catch (error) {
            console.error(error);
            return error;
        }
    }

}