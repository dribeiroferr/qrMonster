import { ResponseDTO } from "../dtos/responseDTO";
import { Server } from "../../domain/server/entities/entities";
import { ServerErrors } from "../../domain/server/errors/errors";
import { Response } from "express";

type ServerResponseType<T> = {
    [K in keyof Response]?: Response[K];
  } & ResponseDTO<T>;
  

export interface ServerResponseDTO extends ServerResponseType<Server | ServerErrors | Server[]> {}


declare module "express-serve-static-core" { 
    interface Response extends ResponseDTO<Server | ServerErrors | Server[]> {}
}
