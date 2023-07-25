import { ResponseDTO } from "../dtos/responseDTO";
import { Server } from "../../domain/server/entities/entities";
import { ServerErrors } from "../../domain/server/errors/errors";
import { Response } from "express";

type ServerResponseType<T> = {
    [K in keyof Response]?: Response[K];
  } & ResponseDTO<T>;
  

export interface ServerResponseDTO extends ServerResponseType<Server | ServerErrors | Server[]> {
    statusCode: number;
}


declare module "express-serve-static-core" { 
    interface Response extends ResponseDTO<Server | ServerErrors | Server[]> {}
}


// export interface ServerResponseDTO extends Response {
//     data: Server | ServerErrors;
//   }

  
// export type ServerResponseDTO = ResponseDTO<Server | ServerErrors> & ServerResponse;

// export type ServerResponseDTO = Response & ResponseDTO<Server[] | ServerErrors>;

// declare module "express-serve-static-core" {
//   interface Response extends ServerResponseDTO {}
// }

// export default ServerResponseDTO;