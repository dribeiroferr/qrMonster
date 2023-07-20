import { Server } from "./server";

// (() => {
//     try {
//         const server = new Server();
//         server.startWithCluster();
//     } catch (error) {
//         console.error(error);
//         return error;
//     } 
// })

const server = new Server();
server.startWithCluster();