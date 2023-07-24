import { ServerDTO } from "../dtos/interface";
import { ServerErrors } from "../errors/errors";

export class Server { 
    private readonly id: string;
    private readonly port: number;
    private readonly maxConnections: number;

    private constructor(serverDto: ServerDTO){
        
        const { id, port, maxConnections } = serverDto;

        if(!id || !port || !maxConnections){
            throw new Error("Invalid ServerDTO data");
        }

        this.id = id;
        this.port = port;
        this.maxConnections = maxConnections;
    }

    public static setServer(serverDto: ServerDTO): Server {
        return new Server(serverDto);
    }

    public toDTO(): ServerDTO{ 
        return{
            id: this.id,
            port: this.port,
            maxConnections: this.maxConnections
        }
    }

    public getId(): string {
        return this.id
    }

    public getPort(): number { 
        return this.port;
    }

    public getMaxConnections(): number { 
        return this.maxConnections;
    }
}