import { TeamError } from "./errors";
import { IServiceImpl } from "./interfaces";

/**
 * 
 * @namespace ServiceImplEntity
 * @description Service implementation entity class
 * @class
 * 
 */

export class ServiceImplEntity{

    name: string; 
    attr: object;

    constructor(name: string, attr: object){
        this.name = name;
        this.attr = attr;
    }
    
    public isValid(): boolean {
        try {
            if(!this.name){
                throw new TeamError({
                    name: 'CREATE_PROJECT_ERROR',
                    message: '500 - internal error',
                    cause: 'project name field is required'
                });
            }
            return true
        } catch (error) {
            if(error instanceof TeamError){
                if(error.name === 'CREATE_PROJECT_ERROR'){
                    console.error(error.message);
                    
                }
            }
        }

    }

    

}