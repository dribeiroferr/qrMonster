import { Server } from "./server";

(() => {
    try {
        const server = new Server();
        server.startWithCluster();
    } catch (error) {
        
    } 
})