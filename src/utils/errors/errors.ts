/**
 * 
 * @name ErrorBase
 * @description Error base class
 * 
 */

export class ErrorBase<T extends string, U extends string, V extends string> extends Error {
    name: T;
    message: U; 
    code: V;

    constructor({
         name,
         message,
         code
        }: {
            name: T;
            message: U, 
            code: V
        }){
           super();
           this.name = name; 
           this.message = message;
           this.code = code; 
        }
}