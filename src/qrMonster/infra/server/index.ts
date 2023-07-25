import { ExpressAdapter } from "../adapters/expressAdapter";
import { ServerDTO } from "../../domain/server/dtos/interface";
import { EnvironmentalGlobalEnvironments } from "../../../utils/config/config"; 

const numCPUs = require("os").cpus().length;

// Create an instance of the ExpressAdapter
const expressAdapter = new ExpressAdapter(EnvironmentalGlobalEnvironments.port1);

// Create and add server instances to the ExpressAdapter
const server1: ServerDTO = {
  id: "server-1",
  port: EnvironmentalGlobalEnvironments.port1,
  maxConnections: 100,
};
// const server2: ServerDTO = {
//   id: "server-2",
//   port: 4000,
//   maxConnections: 50,
// };

expressAdapter.startServer();

// expressAdapter.addServer(server1);
// expressAdapter.addServer(server2);

// Start the server with clustering
// expressAdapter.startWithCluster();