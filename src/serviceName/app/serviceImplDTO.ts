import { ServiceImplEntity } from "../domain/serviceImpl/entitites";

export class serviceImplDTO extends ServiceImplEntity { 
    constructor(name: string, attr: object){
        super(name, attr);
    }
}