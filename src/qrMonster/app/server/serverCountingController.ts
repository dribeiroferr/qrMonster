import { Request, Response } from "express";
import { ServerResponseDTO } from "./serverResponseDTO";
import { ServerErrors } from "../../domain/server/errors/errors";
import { ServerService } from "./serverService";

export class ServerCountingController { 
    public async getAllServers(req: Request, res: Response): Promise< ServerResponseDTO > { 
        try {
            const serverService = new ServerService();
            const servers = await serverService.getAllServers();
            
            if(Array.isArray(servers) && servers.length === 0){
                const response: ServerResponseDTO = { 
                    data: servers,
                    message: '1 instance is running', 
                    success: true, 
                    statusCode: 200
                }
    
                return res.status(200).json(response);
            } else if (Array.isArray(servers) && servers.length > 0){
                const response: ServerResponseDTO = { 
                    data: servers,
                    message: `${servers.length} instances is running`, 
                    success: true, 
                    statusCode: 200
                }
    
                return res.status(200).json(response);
            } else { 
                throw new ServerErrors("InternalServerError", "NotFound","NotFound" );
            }
            


        } catch (error) {

            if(error instanceof ServerErrors){ 
                const response: ServerResponseDTO = { 
                    data: new ServerErrors("ServerMaxConnectionsIsMissing", "NotFound", "NotFound"), 
                    success: false, 
                    statusCode: 404
                }
                return res.status(404).json(response);
            } 
            const response: ServerResponseDTO = { 
                data: new ServerErrors("ServerMaxConnectionsIsMissing", "NotFound", "NotFound"), 
                success: false,
                message: error,
                statusCode: 404
            }
            return res.status(404).json(response);
        }
    }
}