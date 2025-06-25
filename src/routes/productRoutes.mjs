import { Router } from "express";
import * as productController from "../controllers/productController.mjs";

    const router = Router()

    router.get('/', productController.index)
    router.get('/:id', productController.show)

    export default router
// Import the items controller

