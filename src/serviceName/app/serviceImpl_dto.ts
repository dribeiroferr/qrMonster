import { ServiceImplEntity } from "../domain/qrCodeGenerator/entitites";
import { TeamError } from "../domain/qrCodeGenerator/errors";
import { IServiceImpl } from "../domain/qrCodeGenerator/interfaces";

export class ServiceImplDTO extends ServiceImplEntity{

    constructor(props: IServiceImpl){
        super(props);
    }

    public toDomain({name, attr}: IServiceImpl): ServiceImplEntity {
    try {
        return new ServiceImplEntity({
            name: name,
            attr: attr
        });
    } catch (error) {
        if(error instanceof TeamError){
            if(error.name === 'CREATE_PROJECT_ERROR'){
                console.error(error.message);
            }
        }
    }
}
}