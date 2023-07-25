// import express from "express";
// import cluster, { Worker } from "cluster";
// import os from "os"
// import { EnvironmentalGlobalEnvironments } from "../../../utils/config/config";
// import { router } from "../router/v1/router";


// class ServerError extends Error {
//     code: number;
//     constructor(message: string, code: number) {
//       super(message);
//       this.code = code;
//     }
//   }

// export class Server {
//     private async startServer() {
//         try {
//           const portsToTry = [
//             EnvironmentalGlobalEnvironments.port1,
//             EnvironmentalGlobalEnvironments.port2,
//             EnvironmentalGlobalEnvironments.port3,
//             EnvironmentalGlobalEnvironments.port4,
//           ];
//           const app = express();
//           app.use('/v1', router);
//           app.use(express.json());
//           app.use(express.urlencoded({ extended: true }));
        
//           for (const port of portsToTry) {
//             try {
//               await new Promise<void>((resolve, reject) => {
//                 const server = app.listen(port, () => {
//                   console.log(`Server is running on port ${port}`);
//                   resolve();
//                 });
      
//                 server.on('error', (err) => {
//                   if ((err as any).code === 'EADDRINUSE') {
//                     console.warn(`Port ${port} is already in use.`);
//                     server.close();
//                     resolve();
//                   } else {
//                     reject(err);
//                   }
//                 });
//               });
//               // If the server starts successfully, exit the loop and return
//               return;
//             } catch (error) {
//               console.error(`Error starting server on port ${port}:`, error);
//               // Continue to the next port in case of an error
//             }
//           }
      
//           // If none of the ports were available, handle the error here
//           console.error('All ports are in use, the server could not start.');
//           throw new ServerError('All ports are in use', 500);
//         } catch (error) {
//           console.error(error);
//           return error;
//         }
//       }

//     public startWithCluster(){
//         try {
//             const numCPUs = os.cpus().length;
//             console.log(`cpus available in this machine... ${numCPUs}`);

//             if (cluster.isPrimary) {
//                 // Fork workers
//                 for (const _ of Array.from({ length: numCPUs })) {
//                   cluster.fork();
//                 }
          
//                 cluster.on('exit', (worker, code, signal) => {
//                   console.log(`Worker ${worker.process.pid} died`);
//                 });
//             } else { 
//                 this.startServer();
//             }
//         } catch (error) {
//             console.error(error);
//             return error;
//         }
//     }

//     public startWithoutCluster(){
//         try {
//             this.startServer();
//         } catch (error) {
//             console.error(error);
//             return error;
//         }
//     }

// }