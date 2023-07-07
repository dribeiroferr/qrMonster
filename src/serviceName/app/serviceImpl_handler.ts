import { ServiceImplEntity } from "../domain/qrCodeGenerator/entitites";
import { TeamError } from "../domain/qrCodeGenerator/errors";
import { IServiceImpl } from "../domain/qrCodeGenerator/interfaces";
import { ServiceImplDTO } from "./serviceImpl_dto";

export class ServiceImplHandler extends ServiceImplEntity{


    public createNewServiceImpl(serviceImplDTO: ServiceImplDTO): string{ 
        try {
            const domainObject = serviceImplDTO.toDomain({name: this.name, attr: this.attr});
            if(!domainObject.isValid()){
                throw new TeamError({
                    name: 'CREATE_PROJECT_ERROR',
                    message: 'domainObject is not valid',
                })
            }
            return 'save';
        } catch (error) {
            if(error instanceof TeamError){
                if(error.name === 'CREATE_PROJECT_ERROR'){ 
                    console.error(error.message);
                }
            }
        }
    }
}