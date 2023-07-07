import { ServiceImplEntity } from "../domain/qrCodeGenerator/entitites";

export class serviceImplDTO extends ServiceImplEntity { 
    constructor(name: string, attr: object){
        super(name, attr);
    }
}