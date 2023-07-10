import { Request, Response, NextFunction, Router } from "express";
import * as controllers from "../../controllers"
export const router = (
    createQrCodeController : controllers.CreateQrCodeController
): Router => {
    const router = Router();
    const v1Router = Router();

    router.post('/stores/qrCode', createQrCodeController.handler)

    return router;
}