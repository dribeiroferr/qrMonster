import { ServiceImplEntity } from "../domain/qrCodeGeneratorDatabase/entities/entitites";

export class serviceImplDTO extends ServiceImplEntity { 
    constructor(name: string, attr: object){
        super(name, attr);
    }
}