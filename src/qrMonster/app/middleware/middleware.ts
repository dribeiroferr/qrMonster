import { Request, Response, NextFunction } from "express";
import { ServerErrors } from "../../domain/server/errors/errors";

export class Middleware { 
    public static async handleRequest(req: Request, res: Response, next: NextFunction): Promise<void> { 
        try {
            // middleware logic here...
            next();
        } catch (error) {
            res.status(500).json({ error: new ServerErrors("InternalServerError", "ServerErros", "InternalServerError")});
        }
    }

    public static logRequests(req: Request, res: Response, next: NextFunction): void {
        console.log(`${req.params} - ${req.path} - ${new Date().toISOString}`);
        next();
    }

    public static errorHandler(
        err: Error, 
        req: Request,
        res: Response, 
        next: NextFunction
    ): void {
        console.error("Error: ", err.message);
        res.status(500).json({ error: new ServerErrors("InternalServerError", "ServerErros", "InternalServerError")});
    }
}