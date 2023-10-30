import express, { Request, Response } from "express";
import { ExpressAdapter } from "../../adapters/expressAdapter";
import { ServerDTO } from "../../../domain/server/dtos/interface";
import { ServerCountingController } from "../../../app/server/serverCountingController"; 
import { ControlNetController } from "../../../app/qrCodeMonsterGenerator/ControlNetController";

export const router = express.Router();

const serverCountingController = new ServerCountingController();
const controlNetController: ControlNetController = new ControlNetController();

router.get("/", (req: Request, res: Response) => { 
    res.send("Welcome to v1 server !")
});

router.get("/all/servers", serverCountingController.getAllServers);

router.get("/servers", (req: Request, res: Response) => {
    const servers = new ExpressAdapter(9096);
    res.json(servers.getAllServers());
});

router.get("/servers/:id", (req: Request, res: Response) => {
    // Get a specific server by id from the request parameters and send it in the response
    const serverId = req.params.id;
    const expressAdapter = new ExpressAdapter(9096);
    const server = expressAdapter.getServer(serverId);
    if (server) {
      res.json(server);
    } else {
      res.status(404).json({ error: "Server not found" });
    }
  });
  
router.post("/servers", (req: Request, res: Response) => {
  // Create a new server using the data from the request body and add it to the server list
  const serverData: ServerDTO = req.body;
  const expressAdapter = new ExpressAdapter(9096);
  expressAdapter.addServer(serverData);
  res.status(201).json({ message: "Server added successfully" });
});

router.post('/qrMonster', controlNetController.execute)  